module.exports = function check(str, bracketsConfig) {
  if (!bracketsConfig || bracketsConfig.length === 0) return false;
  const configBrackets = bracketsConfig.join('').replace(/,/g,''); // записываем массив в строку, убираем запятые
  const stackOfIndexes = [];

  for (let item of str) { // обходим массив строки
    let itemIndex = configBrackets.indexOf(item);

    if (itemIndex % 2 === 0) { // если индекс четный
      // если следующая скобка такая же, и если последний индекса совпадает с текущим индексом
      if (item === configBrackets[itemIndex + 1] && stackOfIndexes[stackOfIndexes.length - 1] === itemIndex) {
        stackOfIndexes.pop(); //вытаскиваем индекс
      // если следующая скобка такая же, и если последний индекса не совпадает с текущим индексом  
      } else if (item === configBrackets[itemIndex + 1] && stackOfIndexes[stackOfIndexes.length - 1] !== itemIndex) {
        stackOfIndexes.push(itemIndex); // пушим индекс
      } else {
        stackOfIndexes.push(itemIndex); // пушим индекс
      }
    } else {
      // если последний индекс не совпадает с предыдущим
      if (stackOfIndexes.pop() !== itemIndex-1) {
        return false;
      }
    }
  }
  // проверяем длинну стэка
  return stackOfIndexes.length === 0;

 }
