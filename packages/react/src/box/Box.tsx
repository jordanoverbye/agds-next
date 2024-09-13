import { useMemo } from 'react';
import { forwardRefWithAs } from '../core';
import { BoxProps, boxStyles } from './styles';

export const Box = forwardRefWithAs<'div', BoxProps>(function Box(
	{
		as: Tag = 'div',
		alignItems,
		alignSelf,
		background,
		border,
		borderBottom,
		borderBottomWidth,
		borderColor,
		borderLeft,
		borderLeftWidth,
		borderRight,
		borderRightWidth,
		borderTop,
		borderTopWidth,
		borderWidth,
		borderX,
		borderY,
		breakWords,
		color,
		columnGap,
		dark,
		display,
		flexDirection,
		flexGrow,
		flexShrink,
		flexWrap,
		focus,
		focusRingFor,
		fontFamily,
		fontSize,
		fontWeight,
		gap,
		gridColumnEnd,
		gridColumnSpan,
		gridColumnStart,
		height,
		highContrastOutline,
		justifyContent,
		justifySelf,
		light,
		lineHeight,
		link,
		maxHeight,
		maxWidth,
		minHeight,
		minWidth,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingX,
		paddingY,
		palette,
		rounded,
		rowGap,
		textAlign,
		width,
		...props
	},
	ref
) {
	const styles = useMemo(
		() =>
			boxStyles({
				alignItems,
				alignSelf,
				background,
				border,
				borderBottom,
				borderBottomWidth,
				borderColor,
				borderLeft,
				borderLeftWidth,
				borderRight,
				borderRightWidth,
				borderTop,
				borderTopWidth,
				borderWidth,
				borderX,
				borderY,
				breakWords,
				color,
				columnGap,
				dark,
				display,
				flexDirection,
				flexGrow,
				flexShrink,
				flexWrap,
				focus,
				focusRingFor,
				fontFamily,
				fontSize,
				fontWeight,
				gap,
				gridColumnEnd,
				gridColumnSpan,
				gridColumnStart,
				height,
				highContrastOutline,
				justifyContent,
				justifySelf,
				light,
				lineHeight,
				link,
				maxHeight,
				maxWidth,
				minHeight,
				minWidth,
				padding,
				paddingBottom,
				paddingLeft,
				paddingRight,
				paddingTop,
				paddingX,
				paddingY,
				palette,
				rounded,
				rowGap,
				textAlign,
				width,
			}),
		[
			alignItems,
			alignSelf,
			background,
			border,
			borderBottom,
			borderBottomWidth,
			borderColor,
			borderLeft,
			borderLeftWidth,
			borderRight,
			borderRightWidth,
			borderTop,
			borderTopWidth,
			borderWidth,
			borderX,
			borderY,
			breakWords,
			color,
			columnGap,
			dark,
			display,
			flexDirection,
			flexGrow,
			flexShrink,
			flexWrap,
			focus,
			focusRingFor,
			fontFamily,
			fontSize,
			fontWeight,
			gap,
			gridColumnEnd,
			gridColumnSpan,
			gridColumnStart,
			height,
			highContrastOutline,
			justifyContent,
			justifySelf,
			light,
			lineHeight,
			link,
			maxHeight,
			maxWidth,
			minHeight,
			minWidth,
			padding,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingX,
			paddingY,
			palette,
			rounded,
			rowGap,
			textAlign,
			width,
		]
	);
	return <Tag ref={ref} css={styles} {...props} />;
});
