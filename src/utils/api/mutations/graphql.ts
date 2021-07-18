export const createMessage = /* GraphQL */ `
	mutation CreateMessage(
		$input: CreateMessageInput!
		$condition: ModelMessageConditionInput
	) {
		createMessage(input: $input, condition: $condition) {
			__typename
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
			updatedAt
		}
	}
`;
export const createChatRoomUser = /* GraphQL */ `
	mutation CreateChatRoomUser(
		$input: CreateChatRoomUserInput!
		$condition: ModelChatRoomUserConditionInput
	) {
		createChatRoomUser(input: $input, condition: $condition) {
			__typename
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
