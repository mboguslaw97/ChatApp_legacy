import { Button } from 'native-base';
import React from 'react';

import {
	ScreenName,
	SettingsScreenProps,
	StackProps,
} from '../navigation/types';

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
	// TODO: Implement button
	return <Button>Support the Developer!</Button>;
};

const settingsStackProps: StackProps<SettingsScreenProps> = {
	component: SettingsScreen,
	name: ScreenName.Settings,
	options: { title: 'Settings' },
};

export default settingsStackProps;
