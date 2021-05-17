import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { updateUser } from './api/mutations';

export const registerForPushNotification = async (
	userId: string
): Promise<void> => {
	let token;
	if (Constants.isDevice) {
		const { status: existingStatus } =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== 'granted') {
			alert('Failed to get push token for push notification!');
			return;
		}
		token = (await Notifications.getExpoPushTokenAsync()).data;
		updateUser({ id: userId, pushToken: token });
	} else {
		alert('Must use physical device for Push Notifications');
	}

	if (Platform.OS === 'android')
		Notifications.setNotificationChannelAsync('default', {
			importance: Notifications.AndroidImportance.MAX,
			lightColor: '#FF231F7C',
			name: 'default',
			vibrationPattern: [0, 250, 250, 250],
		});
};
