import React, { RefObject } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';

import { Colors } from '../../global/colors';
import { ReduxStore } from '../../store';
import { pickImage } from '../../utils/storage';
import MyButton from '../MyButton';
import createStyleSheet from './styles';

const height = 150;

type Props = {
	callback: (uri: string) => void;
};

const BottomSheetCamera = React.forwardRef<BottomSheet, Props>(
	({ callback }, ref) => {
		// const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		// 	state => state.styles
		// );
		const colors = useSelector<ReduxStore, Colors>(state => state.colors);
		const styles = createStyleSheet(colors);

		const close = () => {
			const tref = ref as RefObject<BottomSheet>;
			if (tref.current) tref.current.snapTo(1);
		};

		return (
			<BottomSheet
				ref={ref}
				snapPoints={[height, -500]}
				initialSnap={1}
				borderRadius={10}
				renderContent={() => (
					<View style={[styles.container, { height }]}>
						<MyButton
							title="Take Photo"
							onPress={async () => {
								const uri = await pickImage('camera');
								callback(uri);
								close();
							}}
						/>
						<MyButton
							title="Choose From Library"
							onPress={async () => {
								const uri = await pickImage('camera roll');
								callback(uri);
								close();
							}}
						/>
						<MyButton title="Cancel" onPress={close} />
					</View>
				)}
			/>
		);
	}
);

export default BottomSheetCamera;
