"use strict";

var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0) / numbers.length;
};
console.log(mediaSimples(2, 6, 3, 7, 4));
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, obj = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    obj[_key2] = arguments[_key2];
  }
  return obj.reduce(function (acc, _ref) {
    var num = _ref.num,
      peso = _ref.peso;
    return acc + num * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0) / obj.reduce(function (acc, _ref2) {
    var peso = _ref2.peso;
    return acc + (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
};
console.log(mediaPonderada({
  num: 7,
  peso: 2
}, {
  num: 9,
  peso: 5
}, {
  num: 3
}));

// considerando uma sequencia ordenada
var mediana = function mediana() {
  var _ref4, _ref5;
  if (arguments.length % 2 !== 0) {
    var _ref3;
    return _ref3 = arguments.length / 2 - 0.5, _ref3 < 0 || arguments.length <= _ref3 ? undefined : arguments[_ref3];
  }
  return ((_ref4 = arguments.length / 2, _ref4 < 0 || arguments.length <= _ref4 ? undefined : arguments[_ref4]) + (_ref5 = arguments.length / 2 - 1, _ref5 < 0 || arguments.length <= _ref5 ? undefined : arguments[_ref5])) / 2;
};
console.log(mediana(2, 4, 5, 7, 42, 99));
console.log(mediana(15, 14, 8, 7, 3));

// considerando uma sequencia desordenada
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return (firstMedian + secondMedian) / 2;
};
console.log(median(2, 5, 99, 4, 42, 7));
console.log(median(3, 14, 7, 15, 8));
var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));