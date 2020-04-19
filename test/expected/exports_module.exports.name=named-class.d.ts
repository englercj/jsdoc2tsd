declare module "test-export-20190913233106" {
    class _Foo {
    }
    class _Bar extends _Foo {
    }
    class _Baz {
    }
    /**
     * Named export with 'module.exports.name =' on a named class.
     */
    class Qux extends _Baz {
        constructor(bar: _Bar);
        readonly foo: _Foo;
    }
}
