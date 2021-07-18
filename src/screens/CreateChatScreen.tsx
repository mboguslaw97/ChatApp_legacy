import { Button, ScrollView, Tabs, Text, useToast } from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MaxUsersInput from '../components/MaxUsersInput';
import TagInput from '../components/TagInput';
import TopicInput from '../components/TopicInput';
import {
	CreateChatScreenProps,
	ScreenName,
	StackProps,
} from '../navigation/types';
import { Actions, Selectors, Store } from '../store';
import { createChatRoom, createChatRoomUser } from '../utils/api/mutations';

const CreateChatScreen: React.FC<CreateChatScreenProps> = ({ navigation }) => {
	const dispatch = useDispatch();
	const toast = useToast();

	const currentUserId = useSelector<Store.State, string | undefined>(
		Selectors.getCurrentUserId
	);

	const [topic, setTopic] = useState('');
	const [maxUsers, setMaxUsers] = useState(0);
	const [tags, setTags] = useState<string[]>([]);
	const [tabIndex, setTabIndex] = useState(0);

	const onSubmit = async () => {
		if (!topic) return;

		// TODO: lambda should create chatRoomUser if chatRoom is created
		createChatRoom({ isPublic: !tabIndex, maxUsers, name: topic, tags }, toast)
			.then(chatRoom => {
				if (!currentUserId || !chatRoom.id) throw Error();
				dispatch(Actions.updateItems(chatRoom));
				return createChatRoomUser(
					{
						chatRoomId: chatRoom.id,
						isModerator: true,
						userId: currentUserId,
					},
					toast
				);
			})
			.then(chatRoomUser => {
				if (!chatRoomUser.chatRoomId) throw Error();
				dispatch(Actions.updateItems(chatRoomUser));
				navigation.goBack();
				navigation.navigate(ScreenName.ChatRoom, {
					chatRoomId: chatRoomUser.chatRoomId,
				});
			});
	};

	const Description = ({ value }: { value: string }) => (
		<Text mb={5} mx={5}>
			{value}
		</Text>
	);

	const InviteFriendsButton = () => (
		<Button
			colorScheme="secondary"
			// TODO
			onPress={() => console.log('Implement this!')}
			variant="outline"
		>
			Invite Friends
		</Button>
	);

	const SubmitButton = () => <Button onPress={onSubmit}>Create</Button>;

	return (
		<Tabs isFitted onChange={(i: number) => setTabIndex(i)}>
			<Tabs.Bar>
				<Tabs.Tab>Public</Tabs.Tab>
			</Tabs.Bar>
			<Tabs.Bar>
				<Tabs.Tab>Private</Tabs.Tab>
			</Tabs.Bar>
			<Tabs.Views>
				<Tabs.View>
					<ScrollView style={{ height: '100%' }}>
						<Description value="Public chat rooms are available to all users via the discover tab. Anyone can join a public chat room." />
						<TopicInput isRequired setTopic={setTopic} />
						<MaxUsersInput setMaxUsers={setMaxUsers} />
						<TagInput setTags={setTags} tags={tags} />
						<InviteFriendsButton />
						<SubmitButton />
					</ScrollView>
				</Tabs.View>
				<Tabs.View>
					<ScrollView style={{ height: '100%' }}>
						<Description value="Only invited users can view or join a private chat room" />
						<TopicInput setTopic={setTopic} />
						<InviteFriendsButton />
						<SubmitButton />
					</ScrollView>
				</Tabs.View>
			</Tabs.Views>
		</Tabs>
	);
};

const createChatStackProps: StackProps<CreateChatScreenProps> = {
	component: CreateChatScreen,
	name: ScreenName.CreateChat,
	options: { title: 'New Chat' },
};

export default createChatStackProps;
