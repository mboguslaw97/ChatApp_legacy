export const getUser = /* GraphQL */ `
	query GetUser($id: ID!) {
		getUser(id: $id) {
			avatar
			bio
			displayName
			id
			name
			pushToken
			chatRoomUsers {
				items {
					id
					chatRoom {
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
								userId
							}
						}
						chatRoomUsers {
							items {
								chatRoomId
								id
								user {
									avatar
									displayName
									id
									name
								}
								userId
							}
						}
						name
						updatedAt
					}
					chatRoomId
				}
				nextToken
			}
			followees {
				items {
					followee {
						avatar
						bio
						displayName
						id
						name
						createdAt
						updatedAt
					}
					followeeId
					follower {
						avatar
						bio
						displayName
						id
						name
						createdAt
						updatedAt
					}
					followerId
					id
					createdAt
					updatedAt
				}
			}
			followers {
				items {
					followee {
						avatar
						bio
						displayName
						id
						name
						createdAt
						updatedAt
					}
					followeeId
					follower {
						avatar
						bio
						displayName
						id
						name
						createdAt
						updatedAt
					}
					followerId
					id
					createdAt
					updatedAt
				}
			}
		}
	}
`;
