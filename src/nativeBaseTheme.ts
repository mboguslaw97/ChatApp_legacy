import { colors } from './global/constants';

const nativeBaseTheme = {
	colors: {
		primary: {
			// 400: 'blue',
		},
		secondary: {
			// 400: 'green',
		},
	},
	components: {
		Button: {
			defaultProps: {
				mt: 4,
				mx: 3,
			},
		},
		FormControl: {
			defaultProps: {
				mb: 3,
				pl: 3,
				pr: 3,
			},
		},
		Icon: {
			variants: {
				header: {
					color: colors.primary,
					mr: 2,
				},
			},
		},
		IconButton: {
			defaultProps: {
				m: 0,
				padding: 0,
				variant: 'unstyled',
			},
		},
		List: {
			baseStyle: {
				borderWidth: 0,
			},
		},
		Toast: {
			defaultProps: {
				placement: 'top',
			},
		},
	},
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},
};

export default nativeBaseTheme;
