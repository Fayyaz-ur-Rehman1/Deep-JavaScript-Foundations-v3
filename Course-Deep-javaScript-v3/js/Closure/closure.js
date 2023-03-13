function mulFn() {
    var mul = 9;
     function fn(val) {
      mul *= val;
    };
    return fn
  }

  var mul = mulFn();
  console.log(mul(13)); // function anonymous

  function mulFn() {
    var mul = 9;
     function fn(val) {
     mul =  mul * val;
      return mul;
    };
    mul = 10; // Its worked bcz when we exicute the function then he will be check whats the value of var at that moment and at that moment the value is 10;
    return fn
  }
  
  var mul2 = mulFn();
  console.log(mul2(13)); // function anonymous


  function fname(firstName){
    firstName= "fayyaz"
    return function lName(lastName){
      firstName = firstName + " " + lastName
      return firstName
    }
  }
  const fullName = fname()
  console.log(fullName("urrehman"))

  function mul(num1){
    num1 = 10
    return function mul2(num2){
      num1 = num1 * num2
      return num1
    }
  }
  const multipliction = mul()
  console.log(multipliction(10))

  function fn(fullName){
    fullName = "fayyaz-ur-rehman"
    return function fn1(friend){
      fullName = fullName + friend
      return fullName
    }
  }
  const con = fn()
  console.log(con("  danish-chouhan"))