import { ConsoleEnd, ConsoleStyle } from '../constants';
import { text } from '../format';

import { bold, dim, hidden, inverse, italic, reset, strikethrough, underline } from './Style';

describe('Style', function () {
    it('should reset formatting', function () {
        const result = reset('text');
        const expected = text(ConsoleStyle.Reset, ConsoleStyle.Reset, 'text');
        expect(result).toBe(expected);
    });

    it('should show bold text', function () {
        const result = bold('text');
        const expected = text(ConsoleStyle.Bold, ConsoleEnd.Bold, 'text');
        expect(result).toBe(expected);
    });

    it('should show dim text', function () {
        const result = dim('text');
        const expected = text(ConsoleStyle.Dim, ConsoleEnd.Bold, 'text');
        expect(result).toBe(expected);
    });

    it('should show italic text', function () {
        const result = italic('text');
        const expected = text(ConsoleStyle.Italic, ConsoleEnd.Italic, 'text');
        expect(result).toBe(expected);
    });

    it('should show underline text', function () {
        const result = underline('text');
        const expected = text(ConsoleStyle.Underline, ConsoleEnd.Underline, 'text');
        expect(result).toBe(expected);
    });

    it('should show inverse text', function () {
        const result = inverse('text');
        const expected = text(ConsoleStyle.Inverse, ConsoleEnd.Inverse, 'text');
        expect(result).toBe(expected);
    });

    it('should show hidden text', function () {
        const result = hidden('text');
        const expected = text(ConsoleStyle.Hidden, ConsoleEnd.Hidden, 'text');
        expect(result).toBe(expected);
    });

    it('should show strikethrough text', function () {
        const result = strikethrough('text');
        const expected = text(ConsoleStyle.Strikethrough, ConsoleEnd.Strikethrough, 'text');
        expect(result).toBe(expected);
    });
});
