/** @module test-export-20190913220502 */

class _NotExported {
}

/**
 *
 */
class _Foo {
}

/**
 * Default export with 'export default' on a named function.
 * @returns {_Foo | null}
 */
export default function _foo() {
    return null;
}
