import { css } from 'styled-components'
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
	WHITE,
} from '@src/constants/colors'
import type { Color, Variant } from './Button'

function getColorScheme(color: Color) {
	switch (color) {
		case 'error':
			return ERROR
		case 'success':
			return SUCCESS
		case 'warn':
			return WARN
		case 'secondary':
			return SECONDARY
		case 'primary':
		default:
			return PRIMARY
	}
}

export function getTheme(color: Color, variant: Variant) {
	const colorScheme = getColorScheme(color)
	switch (variant) {
		case 'outline':
			return css`
				color: ${colorScheme};
				background-color: transparent;
				border: 1px solid ${colorScheme};
				&:hover {
					background-color: ${colorScheme};
				}
			`
		case 'text':
			return css`
				color: ${colorScheme};
				background-color: transparent;
				border: 1px solid transparent;
				&:hover {
					background-color: ${colorScheme};
				}
			`
		case 'solid':
		default:
			return css`
				color: ${WHITE};
				background-color: ${colorScheme};
				border: 1px solid ${colorScheme};
			`
	}
}
