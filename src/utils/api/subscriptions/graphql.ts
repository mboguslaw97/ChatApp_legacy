export const onCreateMessageByChatRoomId = /* GraphQL */ `
	subscription OnCreateMessageByChatRoomId($chatRoomId: ID!) {
		onCreateMessageByChatRoomId(chatRoomId: $chatRoomId) {
			chatRoomId
			content
			createdAt
			id
			type
			user {
				avatar
				id
				name
			}
			userId
		}
	}
`;
export const onCreateChatRoomUserByUserId = /* GraphQL */ `
	subscription OnCreateChatRoomUserByUserId($userId: ID!) {
		onCreateChatRoomUserByUserId(userId: $userId) {
			chatRoom {
				chatRoomUsers {
					items {
						id
						userId
					}
					nextToken
				}
				id
				messages {
					items {
						chatRoomId
						content
						createdAt
						id
						type
						updatedAt
						user {
							avatar
							createdAt
							id
							name
							updatedAt
						}
						userId
					}
					nextToken
				}
				name
				createdAt
				updatedAt
			}
			chatRoomId
			id
			user {
				avatar
				chatRoomUsers {
					nextToken
				}
				id
				name
				createdAt
				updatedAt
			}
			userId
			createdAt
			updatedAt
		}
	}
`;
