import { Color, ConsoleColor, color } from '.';

describe('Color', function () {
    it('should show black text', function () {
        const result = Color.black('text');
        const expected = color(ConsoleColor.Black, 'text');
        expect(result).toBe(expected);
    });

    it('should show red text', function () {
        const result = Color.red('text');
        const expected = color(ConsoleColor.Red, 'text');
        expect(result).toBe(expected);
    });

    it('should show green text', function () {
        const result = Color.green('text');
        const expected = color(ConsoleColor.Green, 'text');
        expect(result).toBe(expected);
    });

    it('should show yellow text', function () {
        const result = Color.yellow('text');
        const expected = color(ConsoleColor.Yellow, 'text');
        expect(result).toBe(expected);
    });

    it('should show blue text', function () {
        const result = Color.blue('text');
        const expected = color(ConsoleColor.Blue, 'text');
        expect(result).toBe(expected);
    });

    it('should show magenta text', function () {
        const result = Color.magenta('text');
        const expected = color(ConsoleColor.Magenta, 'text');
        expect(result).toBe(expected);
    });

    it('should show cyan text', function () {
        const result = Color.cyan('text');
        const expected = color(ConsoleColor.Cyan, 'text');
        expect(result).toBe(expected);
    });

    it('should show white text', function () {
        const result = Color.white('text');
        const expected = color(ConsoleColor.White, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright black text', function () {
        const result = Color.brightBlack('text');
        const expected = color(ConsoleColor.BrightBlack, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright red text', function () {
        const result = Color.brightRed('text');
        const expected = color(ConsoleColor.BrightRed, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright green text', function () {
        const result = Color.brightGreen('text');
        const expected = color(ConsoleColor.BrightGreen, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright yellow text', function () {
        const result = Color.brightYellow('text');
        const expected = color(ConsoleColor.BrightYellow, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright blue text', function () {
        const result = Color.brightBlue('text');
        const expected = color(ConsoleColor.BrightBlue, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright magenta text', function () {
        const result = Color.brightMagenta('text');
        const expected = color(ConsoleColor.BrightMagenta, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright cyan text', function () {
        const result = Color.brightCyan('text');
        const expected = color(ConsoleColor.BrightCyan, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright white text', function () {
        const result = Color.brightWhite('text');
        const expected = color(ConsoleColor.BrightWhite, 'text');
        expect(result).toBe(expected);
    });
});
