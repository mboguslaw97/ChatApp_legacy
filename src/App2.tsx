import { Auth } from 'aws-amplify';
import { useToast } from 'native-base';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Backend from './backend';
import GraphQL2 from './graphql2';
import Navigation from './navigation';
import { Actions, Selectors, Store } from './store';
import { registerForPushNotification } from './utils/notification';

const AppContainer: React.FC = () => {
	const dispatch = useDispatch();
	const toast = useToast();

	const currentUser = useSelector<Store.State, Store.User | undefined>(
		Selectors.getCurrentUser({ [Store.IdKey.chatRoomUserIds]: {} })
	);

	useEffect(() => {
		(async () => {
			const userAuth = await Auth.currentAuthenticatedUser();
			const userId = userAuth.attributes.sub;
			let user = await Backend.getUser(GraphQL2.getUserFull, userId);

			if (!user) {
				await Backend.createUser(
					{
						avatar: 'avatars/72cfc72f-5008-420d-aec6-2d4d15a8f512.png',
						bio: 'Just joined ChatApp!',
						displayName: userAuth.username,
						id: userId,
						name: userAuth.username,
						pushToken: '',
					},
					toast
				);
				user = await Backend.getUser(GraphQL2.getUserFull, userId);
			}

			if (user) {
				registerForPushNotification(user.id);
				user.email = userAuth.attributes.email;
				user.phone = userAuth.attributes.phone_number;
				dispatch(Actions.updateItems(user));
				dispatch(Actions.setCurrentUserId(user.id));
			}

			const browseChatRooms = await Backend.listBrowseChatRooms();
			if (browseChatRooms) {
				dispatch(
					Actions.setBrowseChatRoomIds(
						browseChatRooms.map((chatRoom: Store.ChatRoom) => chatRoom.id)
					)
				);
				dispatch(Actions.updateItems(browseChatRooms));
			}
		})();
		// Adding toast to deps causes error
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// If currentUserId = contact.followeeId, then the contact is a follower relative to the currentUser
	// If currentUserId = contact.followerId, then the contact is a followee relative to the currentUser
	useEffect(() => {
		if (!currentUser) return;
		const subscriptions = [
			Backend.onCreateChatRoomUserByUserId(
				chatRoomUser => dispatch(Actions.updateItems(chatRoomUser)),
				{ userId: currentUser.id }
			),
			Backend.onCreateFollowee(
				contact =>
					dispatch(Actions.updateItems({ ...contact, __typename: 'Follower' })),
				{
					followeeId: currentUser.id,
				}
			),
			Backend.onCreateFollower(
				contact =>
					dispatch(Actions.updateItems({ ...contact, __typename: 'Followee' })),
				{
					followerId: currentUser.id,
				}
			),
			Backend.onDeleteChatRoomUserByUserId(
				chatRoomUser => dispatch(Actions.deleteItem(chatRoomUser)),
				{ userId: currentUser.id }
			),
			Backend.onDeleteFollowee(
				contact =>
					dispatch(Actions.deleteItem({ ...contact, __typename: 'Follower' })),
				{
					followeeId: currentUser.id,
				}
			),
			Backend.onDeleteFollower(
				contact =>
					dispatch(Actions.deleteItem({ ...contact, __typename: 'Followee' })),
				{
					followerId: currentUser.id,
				}
			),
		];
		return () =>
			subscriptions.forEach(
				subscription => subscription && subscription.unsubscribe()
			);
	}, [currentUser, dispatch]);

	useEffect(() => {
		if (!currentUser) return;
		const chatRoomIds = Array.from(
			new Set(
				currentUser.chatRoomUsers
					.filter(chatRoomUser => chatRoomUser.chatRoomId)
					.map(chatRoomUser => chatRoomUser.chatRoomId)
			)
		);
		const subscriptions = chatRoomIds.map(chatRoomId =>
			Backend.onCreateMessage(
				message => dispatch(Actions.updateItems(message)),
				{
					chatRoomId,
				}
			)
		);
		return () =>
			subscriptions.forEach(
				subscription => subscription && subscription.unsubscribe()
			);
	}, [currentUser, dispatch]);

	return <Navigation />;
};

export default AppContainer;
