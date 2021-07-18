import { useNavigation } from '@react-navigation/native';
import { Divider, HStack, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { colors } from '../global/constants';
import { ScreenName } from '../navigation/types';
import { Selectors, Store } from '../store';
import { formatHandler } from '../utils/helper';
import AvatarButton from './AvatarButton';
import FollowButton from './FollowButton';

type Props = {
	onPress?: () => void;
	userId: string;
};

const UserListItem: React.FC<Props> = ({ userId, onPress }) => {
	const navigation = useNavigation();
	const user = useSelector<Store.State, Store.User>(Selectors.getItem(userId));

	if (!onPress)
		onPress = () =>
			navigation.navigate(ScreenName.Profile, { userId: user.id });

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
				<FollowButton userId={user.id} />
			</HStack>
			<Divider />
		</TouchableOpacity>
	);
};

export default UserListItem;
