/**
 * Interface for classes that represent a color.
 *
 * @interface
 */
declare interface Color {
    /**
     * Get the color as an array of red, green, and blue values, represented as
     * decimal numbers between 0 and 1.
     *
     * @returns {Array<number>} An array containing the red, green, and blue values,
     * in that order.
     */
    rgb(): number[];
    /**
     * @function Color#[foobar1]
     */
    foobar1?(): void;
    /**
     * @name Color#[foobar2]
     * @type {Number}
     */
    foobar2?: number;
}
