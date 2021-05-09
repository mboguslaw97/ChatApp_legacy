export const getChatRoomUser = /* GraphQL */ `
	query GetChatRoomUser($id: ID!) {
		getChatRoomUser(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
	query ListChatRooms(
		$filter: ModelChatRoomFilterInput
		$limit: Int
		$nextToken: String
	) {
		listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				chatRoomUsers {
					items {
						id
						user {
							avatar
							displayName
							id
							name
						}
						userId
					}
					nextToken
				}
				id
				messages {
					items {
						content
						createdAt
						id
						type
						user {
							avatar
							id
							name
						}
					}
					nextToken
				}
				name
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
