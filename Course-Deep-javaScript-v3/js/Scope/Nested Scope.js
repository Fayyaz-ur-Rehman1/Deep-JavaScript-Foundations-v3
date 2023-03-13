var global = 'Kyle'; // formal declaration it will make red marbel.

function declaration() { // It's also make red marbel.
    var global = 'Suzy'; // It's formel declaration inside the function so it's gonna be make blue marbel.
    declaration2('Why'); // when we exicute a function with a variable it will check the globally there's any value of question.
    // it will find after that he gonna be exicute.

    function declaration2(question) { // Now it's also blue marbel because we're going through the blue marble form line no.(4)
        console.log(global,question) // The question color is green marble because that's variable has inside the function.
    }
}
declaration()


var a = 'fayyaz'

function fn(){
    var a = 'adnan'

    fn2('chouhan')

    function fn2(b){
        console.log(a , b)
    }

}
fn()

var name = 'adnan'

function fn1(){
    var name = 'fayyaz'
    
 fn3('khilji')

 function fn3(lname){
    console.log(name , lname)
 }
}
fn1()

var n = 'fayyaz'
function fn4(){
    var n = 'rehman'
  fn5('fayyaz')
function fn5(v){
    console.log(n,v)
}
}
fn4()