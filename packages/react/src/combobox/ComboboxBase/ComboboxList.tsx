import { forwardRef, PropsWithChildren } from 'react';
import { Box } from '../../box';
import { FieldMaxWidth, tokens } from '../../core';

export type ComboboxListProps = PropsWithChildren<{
	block: boolean;
	isOpen: boolean;
	maxWidth: FieldMaxWidth;
}>;

export const ComboboxList = forwardRef<HTMLUListElement, ComboboxListProps>(
	function ComboboxList({ children, isOpen, block, maxWidth, ...props }, ref) {
		return (
			<Box
				ref={ref}
				as="ul"
				background="body"
				border
				borderColor="muted"
				rounded
				{...props}
				css={{
					overflowY: 'scroll',
					maxHeight: 295,
					maxWidth: block ? tokens.maxWidth.field[maxWidth] : undefined,
					width: '100%',
					zIndex: 1,
					...(!isOpen && {
						opacity: 0,
						visibility: 'hidden',
					}),
				}}
			>
				{children}
			</Box>
		);
	}
);
