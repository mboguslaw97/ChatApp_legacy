import { Button } from 'native-base';
import React from 'react';

import {
	ScreenNames,
	SettingsScreenProps,
	StackProps,
} from '../navigation/types';

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
	// TODO
	return <Button>Support the Developer!</Button>;
};

const settingsStackProps: StackProps<SettingsScreenProps> = {
	component: SettingsScreen,
	name: ScreenNames.SettingsScreen,
	options: { title: 'Settings' },
};

export default settingsStackProps;
