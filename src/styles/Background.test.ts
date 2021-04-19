import { background } from '../format';
import { ConsoleColor } from '../constants';

import {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    brightRed,
    brightBlack,
    brightBlue,
    brightCyan,
    brightGreen,
    brightMagenta,
    brightWhite,
    brightYellow,
} from './Background';

describe('Background', function () {
    it('should show black background', function () {
        const result = black('text');
        const expected = background(ConsoleColor.Black, 'text');
        expect(result).toBe(expected);
    });

    it('should show red background', function () {
        const result = red('text');
        const expected = background(ConsoleColor.Red, 'text');
        expect(result).toBe(expected);
    });

    it('should show green background', function () {
        const result = green('text');
        const expected = background(ConsoleColor.Green, 'text');
        expect(result).toBe(expected);
    });

    it('should show yellow background', function () {
        const result = yellow('text');
        const expected = background(ConsoleColor.Yellow, 'text');
        expect(result).toBe(expected);
    });

    it('should show blue background', function () {
        const result = blue('text');
        const expected = background(ConsoleColor.Blue, 'text');
        expect(result).toBe(expected);
    });

    it('should show magenta background', function () {
        const result = magenta('text');
        const expected = background(ConsoleColor.Magenta, 'text');
        expect(result).toBe(expected);
    });

    it('should show cyan background', function () {
        const result = cyan('text');
        const expected = background(ConsoleColor.Cyan, 'text');
        expect(result).toBe(expected);
    });

    it('should show white background', function () {
        const result = white('text');
        const expected = background(ConsoleColor.White, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright black background', function () {
        const result = brightBlack('text');
        const expected = background(ConsoleColor.BrightBlack, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright red background', function () {
        const result = brightRed('text');
        const expected = background(ConsoleColor.BrightRed, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright green background', function () {
        const result = brightGreen('text');
        const expected = background(ConsoleColor.BrightGreen, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright yellow background', function () {
        const result = brightYellow('text');
        const expected = background(ConsoleColor.BrightYellow, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright blue background', function () {
        const result = brightBlue('text');
        const expected = background(ConsoleColor.BrightBlue, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright magenta background', function () {
        const result = brightMagenta('text');
        const expected = background(ConsoleColor.BrightMagenta, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright cyan background', function () {
        const result = brightCyan('text');
        const expected = background(ConsoleColor.BrightCyan, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright white background', function () {
        const result = brightWhite('text');
        const expected = background(ConsoleColor.BrightWhite, 'text');
        expect(result).toBe(expected);
    });
});
