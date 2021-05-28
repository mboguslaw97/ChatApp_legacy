import { Box } from 'native-base';
import React from 'react';

import { SettingsScreenProps } from '../navigation/types';

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
	return <Box />;
};

const settingsStackProps = {
	component: SettingsScreen,
	name: 'SettingsScreen',
	options: { title: 'Settings' },
};

export default settingsStackProps;
