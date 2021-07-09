import { Actionsheet } from 'native-base';
import React from 'react';

import { pickImage } from '../utils/storage';

type Props = {
	callback: (uri: string) => void;
	isOpen: boolean;
	onClose: () => void;
};

const CameraActionSheet: React.FC<Props> = ({ callback, isOpen, onClose }) => {
	return (
		<Actionsheet isOpen={isOpen} onClose={onClose}>
			<Actionsheet.Content>
				<Actionsheet.Item
					onPress={async () => {
						const uri = await pickImage('camera');
						callback(uri);
					}}
				>
					Take Photo
				</Actionsheet.Item>
				<Actionsheet.Item
					onPress={async () => {
						const uri = await pickImage('camera roll');
						callback(uri);
					}}
				>
					Choose From Library
				</Actionsheet.Item>
				<Actionsheet.Item onPress={onClose}>Close</Actionsheet.Item>
			</Actionsheet.Content>
		</Actionsheet>
	);
};

export default CameraActionSheet;
