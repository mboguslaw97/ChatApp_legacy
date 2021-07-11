import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Badge, HStack, Icon, IconButton, Text } from 'native-base';
import React from 'react';

type Props = {
	value: string;
	onClose?: (value: string) => void;
};

const Tag: React.FC<Props> = ({ value, onClose }) => {
	return (
		<Badge colorScheme="info" mb={2} rounded="md">
			<HStack m={1}>
				<Text>{value}</Text>
				{!!onClose && (
					<IconButton
						icon={
							<Icon as={<MaterialCommunityIcons name="close" />} size="xs" />
						}
						onPress={() => onClose(value)}
						style={{ marginLeft: 5 }}
					/>
				)}
			</HStack>
		</Badge>
	);
};

export default Tag;
