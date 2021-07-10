import { Auth } from 'aws-amplify';
import { useToast } from 'native-base';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChatRoomUser } from '../../global/types';
import Navigation from '../../navigation';
import { Actions, ReduxStore } from '../../store';
import API from '../../utils/api';
import { createUser } from '../../utils/api/mutations';
import { getUser, listBrowseChatRooms } from '../../utils/api/queries';
import { registerForPushNotification } from '../../utils/notification';
import { getUser as getUserGql } from './queries';

const AppContainer: React.FC = () => {
	const dispatch = useDispatch();
	const toast = useToast();

	const currentUserId = useSelector<ReduxStore, string>(
		state => state.currentUser.id
	);
	const chatRoomUsers = useSelector<ReduxStore, ChatRoomUser[]>(
		state => state.currentUser.chatRoomUsers.items
	);

	useEffect(() => {
		(async () => {
			const userAuth = await Auth.currentAuthenticatedUser();
			const userId = userAuth.attributes.sub;
			let user = await getUser(getUserGql, userId);

			if (!user) {
				await createUser(
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
				user = await getUser(getUserGql, userId);
			}

			if (user) {
				registerForPushNotification(user.id);
				user.email = userAuth.attributes.email;
				user.phone = userAuth.attributes.phone_number;
				dispatch(Actions.setCurrentUser(user));
			}

			const browseChatRooms = await listBrowseChatRooms();
			if (browseChatRooms)
				dispatch(Actions.setBrowseChatRooms(browseChatRooms));
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	// If currentUserId = contact.followeeId, then the contact is a follower relative to the currentUser
	// If currentUserId = contact.followerId, then the contact is a followee relative to the currentUser
	useEffect(() => {
		if (!currentUserId) return;
		const subscriptions = [
			API.onCreateChatRoomUserByUserId(
				chatRoomUser => dispatch(Actions.createChatRoomUser(chatRoomUser)),
				{ userId: currentUserId }
			),
			API.onCreateFollowee(
				contact => dispatch(Actions.createFollower(contact)),
				{ followeeId: currentUserId }
			),
			API.onCreateFollower(
				contact => dispatch(Actions.createFollowee(contact)),
				{ followerId: currentUserId }
			),
			API.onDeleteChatRoomUserByUserId(
				chatRoomUser => dispatch(Actions.deleteChatRoomUser(chatRoomUser)),
				{ userId: currentUserId }
			),
			API.onDeleteFollowee(
				contact => dispatch(Actions.deleteFollower(contact)),
				{ followeeId: currentUserId }
			),
			API.onDeleteFollower(
				contact => dispatch(Actions.deleteFollowee(contact)),
				{ followerId: currentUserId }
			),
		];
		return () =>
			subscriptions.forEach(
				subscription => subscription && subscription.unsubscribe()
			);
	}, [currentUserId, dispatch]);

	useEffect(() => {
		const chatRoomIds = Array.from(
			new Set(
				chatRoomUsers
					.filter(chatRoomUser => chatRoomUser.chatRoomId)
					.map(chatRoomUser => chatRoomUser.chatRoomId)
			)
		);
		const subscriptions = chatRoomIds.map(chatRoomId =>
			API.onCreateMessage(message => dispatch(Actions.createMessage(message)), {
				chatRoomId,
			})
		);
		return () =>
			subscriptions.forEach(
				subscription => subscription && subscription.unsubscribe()
			);
	}, [chatRoomUsers, dispatch]);

	return <Navigation />;
};

export default AppContainer;
