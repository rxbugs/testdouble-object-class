const assert = require('assert')

const td = require('testdouble')

class Foo {
  bar () {
    return false
  }
}

const doBar = foo => foo.bar()

const foo = td.object(new Foo())
td.when(foo.bar()).thenReturn(true)
assert.ok(doBar(foo))
