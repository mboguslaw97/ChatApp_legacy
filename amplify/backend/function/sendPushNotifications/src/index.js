/* Amplify Params - DO NOT EDIT
	API_CHATAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_CHATAPP_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const appsync = require('aws-appsync');
require('cross-fetch/polyfill');

const { getPushTokensQuery, getUserQuery } = require('./src/graphql/queries');
const { createPushNotification, sendPushNotifications } = require('./src/sendPushNotifications');

const credentials = new AWS.Credentials(
  process.env.AWS_ACCESS_KEY_ID,
  process.env.AWS_SECRET_ACCESS_KEY,
  process.env.AWS_SESSION_TOKEN
);

const appsyncClient = new appsync.AWSAppSyncClient({
  url: process.env.API_CHATAPP_GRAPHQLAPIENDPOINTOUTPUT,
  region: process.env.REGION,
  auth: {
    type: 'AWS_IAM',
    credentials,
  },
  disableOffline: true,
});

exports.handler = async event => {
  const promises = event.Records
    .filter(record => record.eventName === 'INSERT')
    .map(async record => {
      const message = record.dynamodb.NewImage;
      const body = message.type.S === 'text' ? message.content.S : 'Attachment: 1 Image';
      const [getUserResult, getPushTokenResult] = await Promise.all([
        appsyncClient.query({ query: getUserQuery(message.userId.S) }),
        appsyncClient.query({ query: getPushTokensQuery(message.chatRoomId.S) })
      ]);
      const title = getUserResult.data.getUser.name;
      const pushTokens = getPushTokenResult.data.getChatRoom.chatRoomUsers.items
        .filter(chatRoomUser => chatRoomUser.userId !== message.userId.S)
        .map(chatRoomUser => chatRoomUser.user.pushToken);
      return createPushNotification(title, body, pushTokens);
    });

  const notifications = await Promise.all(promises);
  await sendPushNotifications(notifications);
};
