export const getUser = /* GraphQL */ `
	query GetUser($id: ID!) {
		getUser(id: $id) {
			chatRoomUsers {
				items {
					chatRoom {
						id
						name
						updatedAt
					}
				}
			}
		}
	}
`;
