import { ConsoleColor } from './ConsoleColor';
import { background } from './ConsoleFormat';

export function black(value: any) {
    return background(ConsoleColor.Black, value);
}

export function red(value: any) {
    return background(ConsoleColor.Red, value);
}

export function green(value: any) {
    return background(ConsoleColor.Green, value);
}

export function yellow(value: any) {
    return background(ConsoleColor.Yellow, value);
}

export function blue(value: any) {
    return background(ConsoleColor.Blue, value);
}

export function magenta(value: any) {
    return background(ConsoleColor.Magenta, value);
}

export function cyan(value: any) {
    return background(ConsoleColor.Cyan, value);
}

export function white(value: any) {
    return background(ConsoleColor.White, value);
}

export function brightBlack(value: any) {
    return background(ConsoleColor.BrightBlack, value);
}

export function brightRed(value: any) {
    return background(ConsoleColor.BrightRed, value);
}

export function brightGreen(value: any) {
    return background(ConsoleColor.BrightGreen, value);
}

export function brightYellow(value: any) {
    return background(ConsoleColor.BrightYellow, value);
}

export function brightBlue(value: any) {
    return background(ConsoleColor.BrightBlue, value);
}

export function brightMagenta(value: any) {
    return background(ConsoleColor.BrightMagenta, value);
}

export function brightCyan(value: any) {
    return background(ConsoleColor.BrightCyan, value);
}

export function brightWhite(value: any) {
    return background(ConsoleColor.BrightWhite, value);
}
