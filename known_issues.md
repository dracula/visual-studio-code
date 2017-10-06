# Known Issues

The following issues are problems with the textmate language files and out of the control of this project. If these affect you, please contact the maintainer of the language file affecting you and file an issue with them.

If you don't see your issue reported below, then please open an issue here and let us know.

## Fixes Pending

- `scss`: Broken highlighting for properties sharing selector names atom/language-sass#234
- `less`: Mixin parameters and guards fully scoped and highlighted. atom/language-less#82
- `php`: Ternary and null coalescing operator highlighting. atom/language-php#285

## Contents

- [C++](#c++)
- [C#](#c-sharp)
- [Clojure](#clojure)
- [Coffeescript](#coffeescript)
- [F#](#f-sharp)
- [Go](#go)
- [Java](#java)
- [Makefile](#makefile)
- [Objective-C](#objective-c)
- [Perl](#perl)
- [Powershell](#powershell)
- [Python](#python)
- [R](#r)
- [Ruby](#ruby)
- [Rust](#rust)
- [Shell](#shell)
- [Swift](#swift)

## C++

```cpp
// Accessor tokens not scoped when accessing member methods
std::abs(1);
// ^^

// Template brackets scoped as comparison operators
template<class T> void hello() {}
//      ^       ^
```

## <a id="c-sharp"></a>C#

**Note:** There are several other breaks in C# that occur when you have deeply nested classes or structures.

```cs
// "bool" types not scoped under certain circumstances
class Foo {
    public bool isFoo() {}
//         ^^^^
}
```

## Clojure

```clj
; Math operators (`+`, `-`, `/`, `*`, etc) are incorrectly scoped to `entity.name.function`.
(+ 1 1)
;^
(- 4 2)
;^
(* 5 5)
;^
(/ 10 5)
;^

; Logic operators (`not`, `is`, etc) are incorrectly scoped to `entity.name.function`.
(not true)
;^^^
(is false)
;^^

; Function parameters have no scope.
(defn hello [name]
;            ^^^^
  (str "Hello " name))

```

## Coffeescript

```coffee
# imports and exports are scope incorrectly across the board
import _ from 'underscore'
#      ^
import * as underscore from 'underscore'
#           ^^^^^^^^^^
import { now } from 'underscore'
#        ^^^
import { now as currentTimestamp } from 'underscore'
#        ^^^
export { sqrt as squareRoot }
#        ^^^^ ^^
export { Mathematics as default, sqrt as squareRoot }
#        ^^^^^^^^^^^ ^^          ^^^^
```

## <a id="f-sharp"></a>F#

```fs
// Brackets and semicolons scoped incorrectly to `keyword.other`.
let issueOne = [2; 3; 4; 5]
//             ^ ^  ^  ^  ^

// Function names are incorrectly scoped to `variable.other`.
let square x = x * x // #2
//  ^^^^^^

// Modulo operator `%` unscoped.
let isEven x = x % 2 = 0
//               ^

// Function calls are unscoped.
isEven 5
//^^^^

// Range operator `..` scope is broken.
let y = [1..10]
//        ^^

// `->` operator not scoped under certain circumstances.
[1..100] |> List.map (fun x -> x * x) |> List.sum
//                          ^^

// `=` operator not scoped under certain circumstances.
module Example =
//             ^

// Type scopes break under certain circumstances.
type Rectangle(x:int, y:int) =
//            ^^^   ^^^^   ^

// Parens scoped incorrectly to `constant.language.unit`
r.Print()
//     ^^
```

## Go

```go
// Scientific numbers not scoped correctly.
x := 1.3e3
//      ^^

// Function params not scoped
func sentenceFactory(mystring string) func(before, after string) string {}
//                   ^^^^^^^^              ^^^^^^  ^^^^^
```

## Java

```java
// Generic scopes span all the way into the brackets (brackets need their own scope)
private static final Set<String> COUNTRIES = new HashSet<String>();
//                      ^^^^^^^^                        ^^^^^^^^
```

## Makefile

```Makefile
hello=hello

# Curly brace variable interpolation
.PHONY: thing
thing:
    echo ${hello}

# Uncommon variant of ":=" scoped incorrectly
uncommonEqual ::= foo bar baz
#              ^^^^^^^^^^^^^^
```

## Objective-C

```objc
// Pragma lines with comments don't work
#pragma mark Navigation Functions // New tag on jump bar named 'Navigation Functions'
//                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// "@protocol" scoped incorrectly under certain circumstances
@protocol Brother; /*
^^^^^^^^^^^^^^^^^
```

## Perl

```pl
# "=" not scoped
my $thing = "foo";
#         ^

# Range operator not scoped
for my $i (0 .. $max) {
#            ^^

# Namespace accessor not scoped
MyModule::foo($thing);
#       ^^

# Increment operator not scoped
$self->{count}++;
#             ^^
```

## Powershell

There is too much wrong with the scopes to list. The textmate scopes need a full refactor.

## Python

```py
# Decorator scopes don't distinguish the "@" symbol
 @property
#^
```

## R

There is too much wrong with the scopes to list. The textmate scopes need a full refactor.

## Ruby

```rb
# Function names not scoped during calls
def add1(x)
    x + 1
end
 add1(5)
#^^^^

# Existence operator "?" not scoped
hash = { foo: 'foo' }
hash.key?(:foo)
#       ^

# Range ".." and double bar "| |" operators not scoped
(1..5).each do |counter|
# ^^           ^       ^
```

## Rust

```rs
// Function parameters and "->" operator not scoped
fn add2(x: i32, y: i32) -> i32 {}
//      ^       ^       ^^

// Generic types are scoped all the way through the brackets
struct Foo<T> { bar: T }
//        ^^^

// Generic types are not scoped when used
struct Foo<T> { bar: T }
//                   ^

// Separators not scoped
struct Foo<T> { bar: T }
//                 ^
```

## Shell

```sh
# "!" is scoped as a pipe operator, not a logical negation operator
echo Hello World!
#               ^

# Semicolons have the same scope as "&&"
echo hello; echo foo && echo bar
#         ^          ^^

# Range operator not scoped
echo {1..5}
#      ^^

# The word "in" in case statements has no scope
case 'hello' in
#            ^^
    hello)
        ;;
esac
```

## Swift

There is too much wrong with the scopes to list. The textmate scopes need a full refactor.
