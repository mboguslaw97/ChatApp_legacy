import { Button } from 'native-base';
import React from 'react';

import { SettingsScreenProps, StackProps } from '../navigation/types';

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
	return <Button>Support the Developer!</Button>;
};

const settingsStackProps: StackProps<SettingsScreenProps> = {
	component: SettingsScreen,
	name: 'SettingsScreen',
	options: { title: 'Settings' },
};

export default settingsStackProps;
