export const createMessage = /* GraphQL */ `
	mutation CreateMessage(
		$input: CreateMessageInput!
		$condition: ModelMessageConditionInput
	) {
		createMessage(input: $input, condition: $condition) {
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
							status
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
				status
				createdAt
				updatedAt
			}
			userId
			createdAt
			updatedAt
		}
	}
`;
