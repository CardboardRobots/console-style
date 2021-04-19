import { BACKGROUND_OFFSET, ConsoleColor, ConsoleEnd } from '../constants';

export function character(value: number) {
    return `\x1b[${value}m`;
}

export function text(start: number, end: number, text: any) {
    return `${character(start)}${text}${character(end)}`;
}

export function color(color: ConsoleColor, value: any) {
    return text(color, ConsoleEnd.Color, value);
}

export function background(color: ConsoleColor, value: any) {
    return text(color + BACKGROUND_OFFSET, ConsoleEnd.Background, value);
}
