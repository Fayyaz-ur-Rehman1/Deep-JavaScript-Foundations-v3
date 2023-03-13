function ask(question) {
    console.log(this.teacher,question)
}
const obj = new ask('What is new `doing` here');

// The new keyword even can invoke a function with a new empty object.
// The new keyord links that object to another object.


var a = new Object()
a.firtName = "fayyaz"
a.lastName = "khilji"
a.fn = function(){
    console.log(this.firtName + ' '+ this.lastName)
}
a.fn()