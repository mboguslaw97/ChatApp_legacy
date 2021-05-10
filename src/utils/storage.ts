import 'react-native-get-random-values';

import { Storage } from 'aws-amplify';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';
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
	if (!result.cancelled) return result.uri;
	return '';
};

export const fetchFile = async (key: string): Promise<string> => {
	return (await Storage.get(key)) as string;
};

export const storeImage = async (uri: string): Promise<string> => {
	const response = await fetch(uri);
	const blob = await response.blob();
	const { key } = (await Storage.put(`${uuidv4()}.png`, blob, {
		contentType: 'image/png',
	})) as { key: string };
	return key;
};
