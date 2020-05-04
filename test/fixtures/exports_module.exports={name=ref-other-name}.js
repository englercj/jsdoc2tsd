/** @module test-export-20190913220202 */

class _NotExported {
}

// Hack: ignored for 'documented' generation strategy with a (re)named export, generated twice otherwise.
/**
 * @ignore
 */
function _foo() {
}

/**
 * Jsdoc comment for 'documented' generation strategy.
 */
module.exports = {
    /**
     * Named export with 'module.exports = {name: ...}' on a referenced type.
     */
    foo: _foo
};
