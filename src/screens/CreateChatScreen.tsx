import {
	Button,
	FormControl,
	HStack,
	Input,
	Tabs,
	Text,
	useToast,
} from 'native-base';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import Tag from '../components/Tag';
import { User } from '../global/types';
import { CreateChatScreenProps, StackProps } from '../navigation/types';
import { ReduxStore } from '../store';
import { createChatRoom, createChatRoomUser } from '../utils/api/mutations';

const CreateChatScreen: React.FC<CreateChatScreenProps> = ({ navigation }) => {
	const toast = useToast();

	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);

	const [topic, setTopic] = useState('');
	const [maxUsers, setMaxUsers] = useState(10);
	const [tag, setTag] = useState('');
	const [tags, setTags] = useState<string[]>([]);

	const addTag = () => {
		const tag2 = tag.trim();
		if (tag2 && !tags.includes(tag2)) setTags([...tags, tag2]);
		setTag('');
	};

	const removeTag = (tag2: string) =>
		setTags(tags.filter(tag3 => tag3 !== tag2));

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

	const TopicInput = ({ isRequired = false }: { isRequired?: boolean }) => {
		const label = isRequired ? 'Topic' : 'Topic (Optional)';
		return (
			<FormControl isRequired={isRequired}>
				<FormControl.Label>{label}</FormControl.Label>
				<Input
					maxLength={500}
					multiline
					onChangeText={text => setTopic(text)}
					value={topic}
				/>
			</FormControl>
		);
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
						<TopicInput isRequired />
						<FormControl isRequired>
							<FormControl.Label>Max Users</FormControl.Label>
							<Input
								defaultValue="10"
								keyboardType="numeric"
								maxLength={3}
								onChangeText={(text: string) => setMaxUsers(parseInt(text, 10))}
								placeholder="Max Users"
							/>
						</FormControl>
						<FormControl>
							<FormControl.Label>Add Tags</FormControl.Label>
							<Input
								maxLength={25}
								onChangeText={(text: string) => setTag(text)}
								onSubmitEditing={addTag}
								value={tag}
							/>
						</FormControl>
						<HStack flexWrap="wrap" mb={2} mx={3} space={2}>
							{tags.map(tag2 => (
								<Tag key={tag2} onClose={removeTag} value={tag2} />
							))}
						</HStack>
						<InviteFriendsButton />
						<SubmitButton />
					</ScrollView>
				</Tabs.View>
				<Tabs.View>
					<ScrollView style={{ height: '100%' }}>
						<Description value="Only invited users can view or join a private chat room" />
						<TopicInput />
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
