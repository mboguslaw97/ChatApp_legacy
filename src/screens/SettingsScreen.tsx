import { Button, Input, Text, TextArea, VStack } from 'native-base';
import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { colors } from '../global/constants';
import { SettingsScreenProps } from '../navigation/types';

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
	const [content, setContent] = useState();
	const onChangeText = text => {
		const words = text.split(' ');
		const tokens = words.map((word, i) => {
			word += i < words.length ? ' ' : '';
			if (word[0] === '#')
				return (
					<Text key={i} bold color={colors.primary}>
						{word}
					</Text>
				);
			return <Text key={i}>{word}</Text>;
		});
		setContent(tokens);
	};

	return (
		<VStack>
			<Button>Support the Developer!</Button>
			{/* <TextInput
				editable
				multiline
				onChangeText={onChangeText}
				style={{
					borderColor: 'white',
					borderRadius: 5,
					borderWidth: 1,
					color: 'white',
					margin: 15,
					padding: 15,
					paddingTop: 15,
				}}
			>
				{content}
			</TextInput> */}
		</VStack>
	);
};

const settingsStackProps = {
	component: SettingsScreen,
	name: 'SettingsScreen',
	options: { title: 'Settings' },
};

export default settingsStackProps;
