function User(name) {
  this.name = name;

  this.test0 = function () {
    console.log('test0');
  };

  function test1() {
    console.log('test1');
  }
}

User.test2 = function () {
  console.log('test2');
};

User.prototype.test3 = function () {
  console.log('test3');
};

const u1 = new User("John");
for(let i in u1){
  console.log(i);
}



