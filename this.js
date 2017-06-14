const context = {
  fn1: function () {
    this.step1 = 'done';
  },
  fn2: function () {
    this.step2 = 'done';
  },
  fn3: () => {
    this.step3 = 'done';
  },
  fn4: function () {
    console.log(this);
  },
};

context.fn1();
context.fn2();
context.fn3();
context.fn4();