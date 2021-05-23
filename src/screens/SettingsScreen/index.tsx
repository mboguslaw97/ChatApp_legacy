/* eslint-disable */
// @ts-nocheck

import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { SettingsScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import createStyleSheet from './styles';

const SettingsScreen: React.FC<SettingsScreenProps> = ({
	navigation,
	// route,
}) => {
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	return <View />;
};

const settingsStackProps = {
	component: SettingsScreen,
	name: 'SettingsScreen',
	options: { title: 'Settings' },
};

export default settingsStackProps;
