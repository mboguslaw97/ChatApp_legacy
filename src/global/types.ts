import { IToastProps } from 'native-base/lib/typescript/components/composites/Toast/types';

export type Toast = {
	show: (props: IToastProps) => void;
};
