import { FormControl, Input } from 'native-base';
import React from 'react';

type Props = {
	setTopic: (topic: string) => void;
	isRequired?: boolean;
};

const Template: React.FC<Props> = ({ setTopic, isRequired = false }) => {
	const label = isRequired ? 'Topic' : 'Topic (Optional)';
	return (
		<FormControl isRequired={isRequired}>
			<FormControl.Label>{label}</FormControl.Label>
			<Input maxLength={500} multiline onChangeText={text => setTopic(text)} />
		</FormControl>
	);
};

export default Template;
