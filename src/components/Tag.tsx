import { Badge, HStack, IconButton, Text } from 'native-base';
import React from 'react';

import MyIcon from './MyIcon';

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
						icon={<MyIcon name="close" size="xs" />}
						onPress={() => onClose(value)}
						style={{ marginLeft: 5 }}
					/>
				)}
			</HStack>
		</Badge>
	);
};

export default Tag;
