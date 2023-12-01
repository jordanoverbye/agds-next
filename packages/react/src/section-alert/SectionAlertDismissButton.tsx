import { MouseEventHandler } from 'react';
import { Button } from '../button';
import { tokens } from '../core';
import { CloseIcon } from '../icon';

type SectionAlertDismissButtonProps = {
	/** Function to be called when the button is pressed. */
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const SectionAlertDismissButton = ({
	onClick,
}: SectionAlertDismissButtonProps) => {
	return (
		<Button
			onClick={onClick}
			iconAfter={CloseIcon}
			variant="text"
			aria-label="Dismiss"
			css={{
				flexShrink: 0,
				// Hide the button text on small screens
				'& > span:first-of-type': {
					display: 'none',
					[tokens.mediaQuery.min.sm]: {
						display: 'block',
					},
				},
			}}
		>
			Dismiss
		</Button>
	);
};
