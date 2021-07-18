export const getUser = /* GraphQL */ `
	query GetUser($id: ID!) {
		getUser(id: $id) {
			__typename
			avatar
			bio
			displayName
			id
			name
			pushToken
			chatRoomUsers {
				items {
					__typename
					id
					isModerator
					chatRoom {
						__typename
						id
						isPublic
						messages {
							items {
								__typename
								chatRoomId
								content
								createdAt
								id
								type
								user {
									__typename
									avatar
									id
									name
								}
								userId
							}
						}
						chatRoomUsers {
							items {
								__typename
								id
								chatRoomId
								isModerator
								user {
									__typename
									avatar
									displayName
									id
									name
								}
								userId
							}
						}
						name
						tags
						updatedAt
					}
					chatRoomId
					userId
				}
				nextToken
			}
			followees {
				items {
					__typename
					followee {
						__typename
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
						__typename
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
					__typename
					followee {
						__typename
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
						__typename
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
