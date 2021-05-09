import { showMessage } from 'react-native-flash-message';

export const showSuccess = (message: string): void =>
	showMessage({ icon: 'auto', message, type: 'success' });

export const showDanger = (message: string): void =>
	showMessage({ icon: 'auto', message, type: 'danger' });
