import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Badge, HStack, Icon, IconButton, Text } from 'native-base';
import React from 'react';

type Props = {
	key: string;
	value: string;
	onClose: (value: string) => void;
};

const Tag: React.FC<Props> = ({ key, value, onClose }) => {
	return (
		<Badge key={key} colorScheme="info" mb={2} rounded="md">
			<HStack m={1}>
				<Text>{value}</Text>
				<IconButton
					icon={<Icon as={<MaterialCommunityIcons name="close" />} size="xs" />}
					onPress={() => onClose(value)}
					style={{ marginLeft: 5 }}
				/>
			</HStack>
		</Badge>
	);
};

export default Tag;
