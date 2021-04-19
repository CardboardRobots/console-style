import { ConsoleColor, ConsoleEnd, background, character, color, text } from '.';

const BACKGROUND_OFFSET = 10;

describe('ConsoleFormat', function () {
    describe('character', function () {
        it('should create a format escape character', function () {
            const result = character(0);
            const expected = `\x1b[${0}m`;
            expect(result).toBe(expected);
        });
    });

    describe('text', function () {
        it('should create a format wrapped string', function () {
            const result = text(0, 1, 'text');
            const expected = `\x1b[${0}m${'text'}\x1b[${1}m`;
            expect(result).toBe(expected);
        });
    });

    describe('color', function () {
        it('should create a color formatted text', function () {
            const result = color(ConsoleColor.Black, 'text');
            const expected = `\x1b[${ConsoleColor.Black}m${'text'}\x1b[${ConsoleEnd.Color}m`;
            expect(result).toBe(expected);
        });
    });

    describe('background', function () {
        it('should create a background formatted text', function () {
            const result = background(ConsoleColor.Black, 'text');
            const expected = `\x1b[${ConsoleColor.Black + BACKGROUND_OFFSET}m${'text'}\x1b[${ConsoleEnd.Background}m`;
            expect(result).toBe(expected);
        });
    });
});
