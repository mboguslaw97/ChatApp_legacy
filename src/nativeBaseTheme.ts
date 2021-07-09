import { primary } from './global/constants';

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
				mb: 2,
				pl: 3,
				pr: 3,
			},
		},
		Icon: {
			baseStyle: {
				color: primary,
			},
			defaultProps: {
				size: 8,
			},
		},
		IconButton: {
			defaultProps: {
				m: 0,
				padding: 0,
				variant: 'unstyled',
			},
			variants: {
				header: {
					h: '100%',
					mt: 0,
					padding: 0,
				},
			},
		},
		List: {
			baseStyle: {
				borderWidth: 0,
			},
		},
	},
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},
};

export default nativeBaseTheme;
