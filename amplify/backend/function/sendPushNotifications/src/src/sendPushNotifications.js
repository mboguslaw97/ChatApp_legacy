const { Expo } = require("expo-server-sdk");

const expo = new Expo();

// Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
module.exports.createPushNotification = (title, body, pushTokens) => ({
  body,
  sound: 'default',
  title,
  to: pushTokens.filter(pushToken => Expo.isExpoPushToken(pushToken)),
});

module.exports.sendPushNotifications = async notifications => {
  const chunks = expo.chunkPushNotifications(notifications);
  // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
  const promises = chunks.map(chunk => expo.sendPushNotificationsAsync(chunk));
  await Promise.all(promises);
}
