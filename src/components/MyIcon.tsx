import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

type Props = IIconProps & {
	name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

const Template: React.FC<Props> = props => {
	const { name } = props;
	const innerIcon = <MaterialCommunityIcons name={name} />;
	return <Icon {...props} as={innerIcon} />;
};

export default Template;
