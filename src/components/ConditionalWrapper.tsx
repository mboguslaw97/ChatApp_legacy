import React from 'react';

type Props = {
	children: React.ReactNode;
	condition: boolean;
	wrapper: (children: React.ReactNode) => React.ReactNode;
};

const ConditionalWrapper: React.FC<Props> = ({
	children,
	condition,
	wrapper,
}) => <>{condition ? wrapper(children) : children}</>;

export default ConditionalWrapper;
