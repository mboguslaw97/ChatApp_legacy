import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { ReduxStore } from '../../store';
import createStyleSheet from './styles';

type Props = TextInputProps & { label?: string };

const ListItemInput: React.FC<Props> = props => {
	const { label, style } = props;
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	return (
		<View style={globalStyles.containerListItem}>
			{!!label && <Text style={styles.label}>{`${label}: `}</Text>}
			<TextInput
				{...props}
				placeholderTextColor={colors.textAlt}
				style={style ? [styles.textInput, style] : styles.textInput}
			/>
		</View>
	);
};

export default ListItemInput;
