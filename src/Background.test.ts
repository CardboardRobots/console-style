import { Background, ConsoleColor, background } from '.';

describe('Background', function () {
    it('should show black background', function () {
        const result = Background.black('text');
        const expected = background(ConsoleColor.Black, 'text');
        expect(result).toBe(expected);
    });

    it('should show red background', function () {
        const result = Background.red('text');
        const expected = background(ConsoleColor.Red, 'text');
        expect(result).toBe(expected);
    });

    it('should show green background', function () {
        const result = Background.green('text');
        const expected = background(ConsoleColor.Green, 'text');
        expect(result).toBe(expected);
    });

    it('should show yellow background', function () {
        const result = Background.yellow('text');
        const expected = background(ConsoleColor.Yellow, 'text');
        expect(result).toBe(expected);
    });

    it('should show blue background', function () {
        const result = Background.blue('text');
        const expected = background(ConsoleColor.Blue, 'text');
        expect(result).toBe(expected);
    });

    it('should show magenta background', function () {
        const result = Background.magenta('text');
        const expected = background(ConsoleColor.Magenta, 'text');
        expect(result).toBe(expected);
    });

    it('should show cyan background', function () {
        const result = Background.cyan('text');
        const expected = background(ConsoleColor.Cyan, 'text');
        expect(result).toBe(expected);
    });

    it('should show white background', function () {
        const result = Background.white('text');
        const expected = background(ConsoleColor.White, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright black background', function () {
        const result = Background.brightBlack('text');
        const expected = background(ConsoleColor.BrightBlack, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright red background', function () {
        const result = Background.brightRed('text');
        const expected = background(ConsoleColor.BrightRed, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright green background', function () {
        const result = Background.brightGreen('text');
        const expected = background(ConsoleColor.BrightGreen, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright yellow background', function () {
        const result = Background.brightYellow('text');
        const expected = background(ConsoleColor.BrightYellow, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright blue background', function () {
        const result = Background.brightBlue('text');
        const expected = background(ConsoleColor.BrightBlue, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright magenta background', function () {
        const result = Background.brightMagenta('text');
        const expected = background(ConsoleColor.BrightMagenta, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright cyan background', function () {
        const result = Background.brightCyan('text');
        const expected = background(ConsoleColor.BrightCyan, 'text');
        expect(result).toBe(expected);
    });

    it('should show bright white background', function () {
        const result = Background.brightWhite('text');
        const expected = background(ConsoleColor.BrightWhite, 'text');
        expect(result).toBe(expected);
    });
});
