import { Button, FormControl, Input, Stack, Tabs, Text } from 'native-base';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { User } from '../../global/types';
import { CreateChatScreenProps, StackProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import { createChatRoom, createChatRoomUser } from '../../utils/api/mutations';
import chatRoomStackProps from '../ChatRoomScreen';
import createStyleSheet from './styles';

const CreateChatScreen: React.FC<CreateChatScreenProps> = ({ navigation }) => {
	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors); // eslint-disable-line

	const [topic, setTopic] = useState('');
	const [maxUsers, setMaxUsers] = useState(10);

	const onSubmit = async () => {
		if (!topic) return;

		// TODO: lambda should create chatRoomUser if chatRoom is created
		createChatRoom({ maxUsers, name: topic })
			.then(chatRoom2 => {
				if (!chatRoom2.id) throw Error();
				return createChatRoomUser({
					chatRoomId: chatRoom2.id,
					isModerator: true,
					userId: currentUser.id,
				});
			})
			.then(chatRoomUser => {
				if (!chatRoomUser.chatRoomId) throw Error();
				navigation.goBack();
				navigation.navigate(chatRoomStackProps.name, {
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
				/>
			</FormControl>
		);
	};

	const Description = ({ value }: { value: string }) => (
		<Text style={{ marginHorizontal: 10, marginTop: 15 }}>{value}</Text>
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
				<Tabs.Tab>Private</Tabs.Tab>
			</Tabs.Bar>
			<Tabs.Bar>
				<Tabs.Tab>Public</Tabs.Tab>
			</Tabs.Bar>
			<Tabs.Views>
				<Tabs.View>
					<ScrollView style={{ height: '100%' }}>
						<Description value="Only invited users can view or join a private chat room" />
						<TopicInput />
						<InviteFriendsButton />
						<SubmitButton />
					</ScrollView>
				</Tabs.View>
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
