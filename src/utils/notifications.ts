import { showMessage } from 'react-native-flash-message';

export const showSuccess = (message: string): void =>
	showMessage({ icon: 'auto', message, type: 'success' });

export const showDanger = (message: string, error?: string): void => {
	showMessage({ icon: 'auto', message, type: 'danger' });
	if (error) console.error(error);
};
