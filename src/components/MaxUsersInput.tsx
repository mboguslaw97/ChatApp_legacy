import { FormControl, Input } from 'native-base';
import React, { useEffect } from 'react';

const DEFAULT_VALUE = 10;

type Props = {
	maxUsers?: number;
	setMaxUsers?: (maxUsers: number) => void;
};

const MaxUsersInput: React.FC<Props> = ({ maxUsers, setMaxUsers }) => {
	useEffect(() => {
		if (setMaxUsers) setMaxUsers(DEFAULT_VALUE);
	}, [setMaxUsers]);

	const defaultValue = maxUsers ?? DEFAULT_VALUE;

	const onChangeText = setMaxUsers
		? (text: string) => setMaxUsers(parseInt(text, 10))
		: undefined;

	return (
		<FormControl isRequired>
			<FormControl.Label>Max Users</FormControl.Label>
			<Input
				defaultValue={`${defaultValue}`}
				isDisabled={!setMaxUsers}
				keyboardType="numeric"
				maxLength={2}
				onChangeText={onChangeText}
				placeholder="Max Users"
			/>
		</FormControl>
	);
};

export default MaxUsersInput;
