// // Every function and object in javascript has an property called prototype.

function workshop1(teacher) {
    this.teacher = teacher;
}
workshop1.prototype.ask = function (question) {
    console.log(this.teacher,question)
}

const obj = new workshop1('Kyle')
obj.ask('Is prototype a class');
console.log(obj)


Array.prototype.add = function () {
    var a = [1,2,3,4]
    const val = a.reduce((acc,crr)=> acc + crr)
    console.log(val)    
} ()


//   // we can make manually methods in prototype like map,reduce,filter etc.
// // easy
  function fn(name) {
    this.stuName = name
  }
  fn.prototype.getName = function () {
    return this.stuName;
  }
  const storeVal2 = new fn('fayaz')
  console.log(storeVal2)

function myForEach(callback) {
  let newArr = []
  for(let i = 0; i <this.length ; i++){
    newArr.push(callback(this[i]))
  }
}

// Array.prototype.myForEach = myForEach;

// const arr = [1,2,3]
// arr.forEach(e => console.log(e))

// function fn(name) {
//     this.stuName = name
//   }
//   fn.prototype.getName = function () {
//     return this.stuName;
//   }
//   const storeVal2 = new fn('fayaz')
//   console.log(storeVal2)

//   function p(name){
//     this.stuName = name
//   }
//   p.prototype.yourName = function (){
//     return this.stuName
//   }
//   const storeVal1 = new p("fayyazkhilji")
//   console.log(storeVal1)

function myForEachs() {
    for(let i = 0; i < this.length; i++){
        console.log(this[i]);
    }
}

Array.prototype.myForEach = myForEachs;