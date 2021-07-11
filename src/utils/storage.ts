import 'react-native-get-random-values';

import { Storage } from 'aws-amplify';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';
// @ts-ignore
import shorthash from 'shorthash';
import { v4 as uuidv4 } from 'uuid';

const typeRequestMap = {
	camera: ImagePicker.requestCameraPermissionsAsync,
	'camera roll': ImagePicker.requestMediaLibraryPermissionsAsync,
};

const requestPermissionAsync = async (
	permissionType: keyof typeof typeRequestMap
): Promise<boolean> => {
	if (Platform.OS === 'web') return true;
	const permissionRequest = typeRequestMap[permissionType];
	const { status } = await permissionRequest();
	if (status === 'granted') return true;
	alert(`Sorry, we need ${permissionType} permissions to make this work!`);
	return false;
};

const methodLaunchMap = {
	camera: ImagePicker.launchCameraAsync,
	'camera roll': ImagePicker.launchImageLibraryAsync,
};

export const pickImage = async (
	method: keyof typeof methodLaunchMap
): Promise<string> => {
	const permissionGrated = await requestPermissionAsync(method);
	if (!permissionGrated) return '';
	const launch = methodLaunchMap[method];
	const result = await launch({
		allowsEditing: true,
		mediaTypes: ImagePicker.MediaTypeOptions.Images,
	});
	if (result.cancelled) return '';
	return result.uri;
};

const getPath = (key: string) =>
	`${FileSystem.cacheDirectory}${shorthash.unique(key)}`;

// TODO: What happens when image is pushed out of cash?
export const fetchFile = async (key: string): Promise<string> => {
	const path = getPath(key);

	if (Platform.OS === 'web') return Storage.get(key) as Promise<string>;

	return FileSystem.getInfoAsync(path).then(image => {
		if (image.exists) return image.uri;
		console.log('Fetching image from S3');
		return Storage.get(key)
			.then(url => FileSystem.downloadAsync(url as string, path))
			.then(newImage => newImage.uri);
	});
};

export const storeImage = async (uri: string): Promise<string> => {
	return fetch(uri)
		.then(response => response.blob())
		.then(
			blob =>
				Storage.put(`${uuidv4()}.png`, blob, {
					contentType: 'image/png',
				}) as Promise<{ key: string }>
		)
		.then(({ key }) => {
			FileSystem.copyAsync({ from: uri, to: getPath(key) });
			return key;
		});
};
