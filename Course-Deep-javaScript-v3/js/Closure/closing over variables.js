var teacher = "Kyle";

var myTeacher = function () {
  console.log(teacher);
};

teacher = "Suzy";
myTeacher(); // When we exicute a function it checks what's the var value at the moment and the value is suzy so he returned suzy.
