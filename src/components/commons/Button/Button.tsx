import { Icon } from '../Icon';
import { ButtonProps } from './Button.d';
import './Button.scss';

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {
	return (
		<button
			type='button'
			{...(selected && { className: 'selected' })}
			{...rest}
		>
			<Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
			{title}
		</button>
	);
}
