import { ConsoleEnd } from './ConsoleEnd';
import { text } from './ConsoleFormat';
import { ConsoleStyle } from './ConsoleStyle';

export function reset(value: any) {
    return text(ConsoleStyle.Reset, ConsoleStyle.Reset, value);
}

export function bold(value: any) {
    return text(ConsoleStyle.Bold, ConsoleEnd.Bold, value);
}

// TODO: Test this
export function dim(value: any) {
    return text(ConsoleStyle.Dim, ConsoleEnd.Bold, value);
}

export function italic(value: any) {
    return text(ConsoleStyle.Italic, ConsoleEnd.Italic, value);
}

export function underline(value: any) {
    return text(ConsoleStyle.Underline, ConsoleEnd.Underline, value);
}

export function inverse(value: any) {
    return text(ConsoleStyle.Inverse, ConsoleEnd.Inverse, value);
}

export function hidden(value: any) {
    return text(ConsoleStyle.Hidden, ConsoleEnd.Hidden, value);
}

export function strikethrough(value: any) {
    return text(ConsoleStyle.Strikethrough, ConsoleEnd.Strikethrough, value);
}
