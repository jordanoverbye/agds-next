import { ReactNode } from 'react';
import { FieldContainer } from './FieldContainer';
import { FieldLabel } from './FieldLabel';
import { FieldHint } from './FieldHint';
import { FieldMessage } from './FieldMessage';
import { Text } from '@ag.ds-next/text';
import { useId } from '@reach/auto-id';

export type FieldProps = {
	children: ((allyProps: A11yProps) => ReactNode) | ReactNode;
	label: string;
	required: boolean;
	hint: string | undefined;
	message: string | undefined;
	invalid?: boolean;
	valid?: boolean;
};

export const Field = ({
	children,
	hint,
	label,
	message,
	required,
	invalid,
	valid,
}: FieldProps) => {
	const { fieldId, hintId, messageId } = useFieldIds();
	const a11yProps = useFieldA11yProps({
		required,
		fieldId,
		message,
		messageId,
		hint,
		hintId,
		invalid,
	});
	return (
		<FieldContainer invalid={invalid}>
			<FieldLabel htmlFor={fieldId}>
				{label}{' '}
				<Text as="span" color="muted">
					({required ? 'required' : 'optional'})
				</Text>
			</FieldLabel>
			{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
			{message && (invalid || valid) ? (
				<FieldMessage id={messageId} invalid={invalid} valid={valid}>
					{message}
				</FieldMessage>
			) : null}
			{typeof children === 'function' ? children(a11yProps) : children}
		</FieldContainer>
	);
};

export const useFieldIds = () => {
	const id = useId();
	const fieldId = `field-${id}`;
	const hintId = `field-${id}-hint`;
	const messageId = `field-${id}-message`;
	return { fieldId, hintId, messageId };
};

type A11yProps = {
	'aria-required': boolean;
	'aria-invalid': boolean;
	'aria-describedby': string;
	id: string;
};

export const useFieldA11yProps = ({
	required,
	fieldId,
	message,
	messageId,
	hint,
	hintId,
	invalid,
}: {
	required?: boolean;
	fieldId: string;
	message?: string;
	messageId: string;
	hint?: string;
	hintId: string;
	invalid?: boolean;
}): A11yProps => ({
	'aria-required': Boolean(required),
	'aria-invalid': Boolean(invalid),
	'aria-describedby': [message ? messageId : null, hint ? hintId : null]
		.filter(Boolean)
		.join(' '),
	id: fieldId,
});
