const nativeBaseTheme = {
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
