//Global-Scope

var a = 'my name '
function fn() {
    var b = 'fayyaz'
    console.log(a)
    console.log(b)
}
fn()

// Module-Scope

// Block-Scope

//  let a = 'khilji' => not run
{
    let d = 'fayyaz'
    console.log(d)
    // console.log(a)=> not run
}
// console.log(d)=> not run


// Function-Scope

function fn() {
    var a = 'khilji'
    console.log(a)
}
fn()

// Laxical-Scope

var m = 'good'
function fn() {
    var k = 'boy'
    fn1()
    function fn1() {
        var t = 'is'
        fn4()
        function fn4() {
            var l = 'fayyaz'

            console.log(m + k + t + l)
        }
    }
}
fn()