var a = 'Hello !';
// This is lexical scope it's goes to down words to up words and inner function can be check parent function values.
//  but parent function cannot be check inner function values.

function first() {
    var b = 'World Shanwaz ';
    second();

    function second() {
        var c = 'From this side ';
        three()

        function three() {
            var d = 'Im a JavaScript developer ';
            four()

            function four() {
                var e = 'for 1 year';
                console.log(a + b + c + d + e)

            }
        }
    }
}
first() // execution of function first().


var a = 'Hello'

function fn() {
    var b = 'my'
    fn1()
    function fn1() {
        var c = 'is'
        fn2()
        function fn2() {
            var d = "fayyaz"
            fn3()
            function fn3() {
                var e = "ur"
                fn4()
                function fn4() {
                    var f = "rehman"
                    console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f)
                }
            }
        }
    }
}
fn()