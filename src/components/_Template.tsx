import React from 'react';

type Props = {
	text: string;
};

const Template: React.FC<Props> = ({ text }) => {
	return <>{text}</>;
};

export default Template;
