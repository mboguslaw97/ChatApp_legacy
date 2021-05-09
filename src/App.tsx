import Amplify from 'aws-amplify';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import React from 'react';
import { LogBox, Platform } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';

import config from './aws-exports';
import Container from './container';
import store from './store';

if (Platform.OS !== 'web')
	LogBox.ignoreLogs([
		'Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.',
		'ImmutableStateInvariantMiddleware took', // 39ms, which is more than the warning threshold of 32ms. If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions. It is disabled in production builds, so you don't need to worry about that.
	]);

Amplify.configure({
	...config,
	// Fixes: [Unhandled promise rejection: Error: No credentials, applicationId or region]
	Analytics: { disabled: true },
});

const App: React.FC = () => {
	return (
		// <React.StrictMode>
		<ReduxProvider store={store}>
			<SafeAreaProvider>
				<Container />
			</SafeAreaProvider>
			<FlashMessage position="top" />
		</ReduxProvider>
		// </React.StrictMode>
	);
};

export default withAuthenticator(App);
