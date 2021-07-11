import { useNavigation } from '@react-navigation/native';
import { Divider, HStack, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { colors } from '../global/constants';
import { User } from '../global/types';
import { ReduxStore } from '../store';
import { formatHandler } from '../utils/helper';
import AvatarButton from './AvatarButton';
import FollowButton from './FollowButton';

type Props = {
	onPress?: () => void;
	user: User;
};

const UserListItem: React.FC<Props> = ({ user, onPress }) => {
	const navigation = useNavigation();

	const currentUserId = useSelector<ReduxStore, string>(state => {
		return state.currentUser.id;
	});

	if (user.id === currentUserId) {
		console.warn(`Tried to create ${UserListItem.name} for currnetUser`);
		return null;
	}

	if (!onPress)
		onPress = () => navigation.navigate('ProfileScreen', { userId: user.id });

	return (
		<TouchableOpacity onPress={onPress}>
			<HStack alignItems="center" justifyContent="space-between" p={2}>
				<HStack alignItems="center" space={3}>
					<AvatarButton
						size="small"
						source={{ s3Key: user.avatar }}
						userId={user.id}
					/>
					{user.displayName && <Text>{user.displayName}</Text>}
					<Text color={colors.gray}>{formatHandler(user.name)}</Text>
				</HStack>
				<FollowButton user={user} />
			</HStack>
			<Divider />
		</TouchableOpacity>
	);
};

export default UserListItem;
