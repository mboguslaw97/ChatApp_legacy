import { Button } from 'native-base';
import React, { RefObject } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';

import { Colors } from '../../global/colors';
import { ReduxStore } from '../../store';
import { pickImage } from '../../utils/storage';
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
				borderRadius={10}
				initialSnap={1}
				renderContent={() => (
					<View style={[styles.container, { height }]}>
						<Button
							onPress={async () => {
								const uri = await pickImage('camera');
								callback(uri);
								close();
							}}
						>
							Take Photo
						</Button>
						<Button
							onPress={async () => {
								const uri = await pickImage('camera roll');
								callback(uri);
								close();
							}}
						>
							Choose From Library
						</Button>
						<Button onPress={close}>Cancel</Button>
					</View>
				)}
				snapPoints={[height, -500]}
			/>
		);
	}
);

export default BottomSheetCamera;
