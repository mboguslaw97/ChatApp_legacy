import { Button, ScrollView, Tabs, Text, useToast } from 'native-base';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MaxUsersInput from '../components/MaxUsersInput';
import TagInput from '../components/TagInput';
import TopicInput from '../components/TopicInput';
import { User } from '../global/types';
import { CreateChatScreenProps, StackProps } from '../navigation/types';
import { ReduxStore } from '../store';
import { createChatRoom, createChatRoomUser } from '../utils/api/mutations';

const CreateChatScreen: React.FC<CreateChatScreenProps> = ({ navigation }) => {
	const toast = useToast();

	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);

	const [topic, setTopic] = useState('');
	const [maxUsers, setMaxUsers] = useState(0);
	const [tags, setTags] = useState<string[]>([]);

	const onSubmit = async () => {
		if (!topic) return;

		// TODO: lambda should create chatRoomUser if chatRoom is created
		createChatRoom({ maxUsers, name: topic }, toast)
			.then(chatRoom2 => {
				if (!chatRoom2.id) throw Error();
				return createChatRoomUser(
					{
						chatRoomId: chatRoom2.id,
						isModerator: true,
						userId: currentUser.id,
					},
					toast
				);
			})
			.then(chatRoomUser => {
				if (!chatRoomUser.chatRoomId) throw Error();
				navigation.goBack();
				navigation.navigate('ChatRoomScreen', {
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
		<Button colorScheme="secondary" onPress={onSubmit} variant="outline">
			Invite Friends
		</Button>
	);

	const SubmitButton = () => <Button onPress={onSubmit}>Create</Button>;

	return (
		<Tabs isFitted>
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
	name: 'CreateChatScreen',
	options: { title: 'New Chat' },
};

export default createChatStackProps;
