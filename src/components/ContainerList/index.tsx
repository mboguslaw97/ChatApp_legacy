import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { ReduxStore } from '../../store';
import createStyleSheet from './styles';

type Props = {
	label?: string;
	style?: ViewStyle;
};

const ContainerList: React.FC<Props> = ({ children, label, style }) => {
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	return (
		<>
			{label && <Text style={styles.label}>{label}</Text>}
			<View style={[globalStyles.containerList, style]}>{children}</View>
		</>
	);
};

export default ContainerList;
