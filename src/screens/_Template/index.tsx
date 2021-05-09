/* eslint-disable */
// @ts-nocheck

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { ReduxStore } from '../../store';
import createStyleSheet from './styles';

const TemplateScreen: React.FC<TemplateScreenProps> = ({
	navigation,
	// route,
}) => {
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	useEffect(() => {
		navigation.setOptions({ title: 'New Screen' });
	}, [navigation]);

	return <View style={globalStyles.containerScreen}></View>;
};

export default TemplateScreen;
