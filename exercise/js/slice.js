var arguments = {
  // length 属性最重要
  length: 3,
  0: 'JavaScript',
  1: 'HTML',
  2: 'CSS',
};

var arguments1 = {
  0: 'JavaScript',
  1: 'HTML',
  2: 'CSS',
};

Array.prototype.slice.call(arguments);
// [ 'JavaScript', 'HTML', 'CSS' ]

Array.prototype.slice.call(arguments, 1);
// [ 'HTML', 'CSS' ]

Array.prototype.slice.call(arguments1);
// []
