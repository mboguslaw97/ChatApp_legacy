/* eslint-disable */
// @ts-nocheck

import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { ReduxStore } from '../../store';
import createStyleSheet from './styles';

type Props = {};

const Template: React.FC<Props> = props => {
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	return <View />;
};

export default Template;
