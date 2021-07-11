import { FormControl, HStack, Input } from 'native-base';
import React, { useState } from 'react';

import Tag from './Tag';

type Props = {
	tags: string[];
	setTags?: (tags: string[]) => void;
};

const TagInput: React.FC<Props> = ({ tags, setTags }) => {
	const [tag, setTag] = useState('');

	const addTag = () => {
		const tag2 = tag.trim();
		if (setTags && tag2 && !tags.includes(tag2)) setTags([...tags, tag2]);
		setTag('');
	};

	const removeTag = (tag2: string) =>
		setTags && setTags(tags.filter(tag3 => tag3 !== tag2));

	return (
		<>
			<FormControl>
				<FormControl.Label>Add Tags</FormControl.Label>
				<Input
					isDisabled={!setTags}
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
		</>
	);
};

export default TagInput;
