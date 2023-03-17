// prototype

function fn(){
    for(let  i = 0 ; i < this.length  ; i++){
        console.log(this[i])
    }
}
Array.prototype.fayyaz = fn
var a = [1,2,3,4,5,6,7]
a.fayyaz()

console.log('hello world');
console.log('na kam nahi na shaj nahi mai ke nahi farhaz nahi punnu bhi nahi ranjha bhi nahi mirza bhi nahi vomikh bhi nahi')