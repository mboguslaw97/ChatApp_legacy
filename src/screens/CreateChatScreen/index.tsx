import {
	Button,
	Container,
	Form,
	Input,
	Item,
	Label,
	Tab,
	Tabs,
	Text,
} from 'native-base';
import React, { useState } from 'react';
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

	const [name, setName] = useState('');
	const [maxUsers, setMaxUsers] = useState(10);

	const onSubmit = async () => {
		if (!name) return;

		// TODO: lambda should create chatRoomUser if chatRoom is created
		createChatRoom({ maxUsers, name })
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

	const Description = ({ value }: { value: string }) => (
		<Text style={{ marginHorizontal: 10, marginTop: 15 }}>{value}</Text>
	);

	const InviteFriendsButton = () => (
		<Button
			block
			bordered
			onPress={onSubmit}
			primary
			style={{ marginHorizontal: 20, marginTop: 20 }}
		>
			<Text>Invite Friends</Text>
		</Button>
	);

	const SubmitButton = () => (
		<Button
			block
			onPress={onSubmit}
			primary
			style={{ marginHorizontal: 20, marginTop: 20 }}
		>
			<Text>Create</Text>
		</Button>
	);

	return (
		<Tabs>
			<Tab heading="Private">
				<Container>
					<Description value="Only invited users can view or join a private chat room" />
					<Form>
						<Item floatingLabel>
							<Label>Topic (Optional)</Label>
							<Input
								maxLength={500}
								multiline
								onChangeText={(text: string) => setName(text)}
							/>
						</Item>
					</Form>
					<InviteFriendsButton />
					<SubmitButton />
				</Container>
			</Tab>
			<Tab heading="Public">
				<Container>
					<Description value="Public chat rooms are available to all users via the discover tab. Anyone can join a public chat room." />
					<Form>
						<Item floatingLabel>
							<Label>Topic</Label>
							<Input
								maxLength={500}
								multiline
								onChangeText={(text: string) => setName(text)}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Max Users</Label>
							<Input
								keyboardType="numeric"
								maxLength={3}
								onChangeText={(text: string) => setMaxUsers(parseInt(text, 10))}
							/>
						</Item>
					</Form>
					<InviteFriendsButton />
					<SubmitButton />
				</Container>
			</Tab>
		</Tabs>
	);
};

const createChatStackProps: StackProps<CreateChatScreenProps> = {
	component: CreateChatScreen,
	name: 'CreateChatScreen',
	options: { title: 'Chats' },
};

export default createChatStackProps;
