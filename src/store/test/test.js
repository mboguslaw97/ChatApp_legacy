/* eslint-disable */

const data = require('./testData');
const { normalize, denormalize, followPath } = require('../normalizr');

const normed = normalize(data);
// console.log(normed);

// const denormed = denormalize(normed, '6724c8f5-c749-4c74-b695-7432971f32b6', { chatRoomUserIds: {}});
// const denormed = followPath(normed, '6724c8f5-c749-4c74-b695-7432971f32b6', ['chatRoomUserIds']);
// const denormed = denormalize(normed, 'a17e46d9-d60d-4fd1-bb28-9b4d68ce7e28', { chatRoomUserIds: {}, messageIds: {}});
// console.log(denormed);

// const user = {
//   __typename: 'ChatRoom',
//   chatRoomUserIds: [ '15079e72-494c-4219-b59f-3038c6c051f3' ],
//   id: '4b0142d2-7abb-497e-ae18-b4e52fbdd60d',
//   isPublic: true,
//   messageIds: [ 'b394f3c1-5e7e-4fbc-b143-7f179a26c6d1' ],
//   name: 'Party',
//   tags: [ 'Creative', 'Fun', 'Party' ],
//   updatedAt: '2021-07-12T01:58:49.950Z'
// }

// const user = {
//     "__typename": "User",
//     "avatar": "avatars/72cfc72f-5008-420d-aec6-2d4d15a8f512.png",
//     "bio": "Just joined ChatApp!",
//     "displayName": "justin",
//     "id": "6724c8f5-c749-4c74-b695-7432971f32b6",
//     "name": "justin",
//     "pushToken": "ExponentPushToken[106oCVGrpSJDzn5AIhcw3Q]",
//     "chatRoomUserIds": [
//         "15079e72-494c-4219-b59f-3038c6c051f3"
//     ],
//     "followeeIds": [
//         "7fc2da56-4d1e-4b04-88c3-b03800521b65"
//     ],
//     "followerIds": [
//         "38e8a4a0-0774-47bd-b6de-cfcf34b211e4"
//     ],
//     "email": "mboguslaw97@gmail.com",
//     "phone": "+12672509806"
// }

// recursiveId = {"chatRoomUserIds": { "chatRoomId": {} } };
// const denormed = denormalize(data, user.id, recursiveId);
// console.log(denormed);
// recursiveId = ["chatRoomUserIds", "chatRoomId"];
// const item = getItem(data, user.id, recursiveId);
// console.log(item);
