// https://github.com/aws-amplify/amplify-js/blob/main/packages/aws-amplify-react-native/src/AmplifyTheme.ts

import { StyleSheet } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AmplifyThemeType = Record<string, any>;

// Colors
export const buttonColor = '#00F'; // #FF9900;
export const buttonTextColor = '#FFF';
export const containerBackgroundColor = '#222'; // '#FFF';
export const deepSquidInk = '#FFF'; // '#152939';
export const disabledButtonColor = '#008'; // '#ff990080';
export const linkUnderlayColor = '#FFF';
export const placeholderColor = '#CCC'; // '#C7C7CD';
export const textInputBorderColor = '#C4C4C4';
export const textInputColor = '#FFF'; // '#000000';

// Theme
export default StyleSheet.create({
	album: {
		width: '100%',
	},
	button: {
		alignItems: 'center',
		backgroundColor: buttonColor,
		padding: 16,
	},
	buttonDisabled: {
		alignItems: 'center',
		backgroundColor: disabledButtonColor,
		padding: 16,
	},
	buttonText: {
		color: buttonTextColor,
		fontSize: 14,
		fontWeight: '600',
	},
	cell: {
		flex: 1,
		width: '50%',
	},
	container: {
		alignItems: 'center',
		backgroundColor: containerBackgroundColor,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingTop: 20,
		width: '100%',
	},
	errorRow: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	errorRowIcon: {
		height: 25,
		width: 25,
	},
	errorRowText: {
		marginLeft: 10,
	},
	formField: {
		marginBottom: 22,
	},
	input: {
		borderColor: textInputBorderColor,
		borderRadius: 3,
		borderWidth: 1,
		color: textInputColor,
		padding: 16,
	},
	inputLabel: {
		color: placeholderColor,
		marginBottom: 8,
	},
	navBar: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 35,
		padding: 15,
	},
	navButton: {
		borderRadius: 4,
		marginLeft: 12,
	},
	phoneContainer: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
	},
	phoneInput: {
		borderColor: textInputBorderColor,
		borderRadius: 3,
		borderWidth: 1,
		color: textInputColor,
		flex: 2,
		padding: 16,
	},
	photo: {
		width: '100%',
	},
	picker: {
		flex: 1,
		height: 44,
	},
	pickerItem: {
		height: 44,
	},
	section: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		width: '100%',
	},
	sectionFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		marginTop: 15,
		padding: 10,
		width: '100%',
	},
	sectionFooterLink: {
		alignItems: 'baseline',
		color: buttonColor,
		fontSize: 14,
		textAlign: 'center',
	},
	sectionFooterLinkDisabled: {
		alignItems: 'baseline',
		color: disabledButtonColor,
		fontSize: 14,
		textAlign: 'center',
	},
	sectionHeader: {
		marginBottom: 32,
		paddingTop: 20,
		width: '100%',
	},
	sectionHeaderText: {
		color: deepSquidInk,
		fontSize: 20,
		fontWeight: '500',
	},
	sectionScroll: {
		flex: 1,
		paddingHorizontal: 20,
		width: '100%',
	},
	signedOutMessage: {
		padding: 20,
		textAlign: 'center',
	},
});
