import Amplify from 'aws-amplify';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { LogBox, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';

import amplifyTheme from './amplifyTheme';
import config from './aws-exports';
import AppContainer from './components/AppContainer';
import nativeBaseTheme from './nativeBaseTheme';
import store from './store';

if (Platform.OS !== 'web')
	LogBox.ignoreLogs([
		'Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.',
		'ImmutableStateInvariantMiddleware took', // 39ms, which is more than the warning threshold of 32ms. If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions. It is disabled in production builds, so you don't need to worry about that.
		`Warning: This synthetic event is reused for performance reasons. If you're seeing this, you're accessing the property \`defaultPrevented\` on a released/nullified synthetic event. This is set to null. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.`,
	]);

Amplify.configure({
	...config,
	// Fixes: [Unhandled promise rejection: Error: No credentials, applicationId or region]
	Analytics: { disabled: true },
});

const customNativeBaseTheme = extendTheme(nativeBaseTheme);

const App: React.FC = () => {
	return (
		// <React.StrictMode>
		<NativeBaseProvider theme={customNativeBaseTheme}>
			<ReduxProvider store={store}>
				<SafeAreaProvider>
					<AppContainer />
				</SafeAreaProvider>
			</ReduxProvider>
		</NativeBaseProvider>
		// </React.StrictMode>
	);
};

// https://docs.amplify.aws/lib/auth/customui/q/platform/js
export default withAuthenticator(App, false, [], null, amplifyTheme);
