/* 
Assignment:
Out of the total number of sales for a given week, 
calculate what percentage of a product's sales occurs on a particular day of the week 


Your code will be run in the browser developer tools console

expected output in console: [[0,0.16666666666666666,0.22916666666666666,0,0.14583333333333334,0.20833333333333334,0.25],48]

Solution is evaluated for use of javascript functions and readability
*/

// LineItemId, OrderId, Product Id, Quantity, dayOfWeek
const productOrderLineItem = (id, orderId, pid, qty, dayOfWeek) => ({
  id,
  orderId,
  pid,
  qty,
  dayOfWeek,
});

const productOrderLineItems = [
  productOrderLineItem(0, 1, 1, 0, 0),
  productOrderLineItem(1, 4, 2, 0, 0),
  productOrderLineItem(2, 5, 1, 1, 2),
  productOrderLineItem(3, 2, 1, 1, 2),
  productOrderLineItem(4, 4, 1, 1, 2),
  productOrderLineItem(5, 1, 4, 2, 5),
  productOrderLineItem(6, 4, 2, 2, 5),
  productOrderLineItem(7, 9, 3, 2, 5),
  productOrderLineItem(8, 3, 1, 2, 5),
  productOrderLineItem(9, 6, 1, 2, 5),
  productOrderLineItem(10, 4, 1, 2, 5),
  productOrderLineItem(11, 6, 1, 2, 5),
  productOrderLineItem(12, 2, 1, 2, 5),
  productOrderLineItem(13, 3, 1, 3, 6),
  productOrderLineItem(14, 4, 5, 3, 6),
  productOrderLineItem(15, 6, 2, 3, 6),
  productOrderLineItem(16, 7, 7, 3, 6),
  productOrderLineItem(17, 8, 3, 4, 3),
  productOrderLineItem(18, 4, 8, 4, 3),
  productOrderLineItem(19, 4, 4, 5, 1),
  productOrderLineItem(20, 8, 4, 6, 2),
  productOrderLineItem(21, 3, 7, 6, 2),
  productOrderLineItem(22, 7, 2, 6, 2),
  productOrderLineItem(23, 1, 5, 7, 4),
  productOrderLineItem(24, 4, 5, 8, 1),
  productOrderLineItem(25, 5, 3, 8, 1),
  productOrderLineItem(26, 2, 2, 8, 1),
  productOrderLineItem(27, 4, 7, 8, 1),
  productOrderLineItem(28, 1, 5, 9, 6),
  productOrderLineItem(29, 4, 3, 9, 6),
  productOrderLineItem(30, 9, 2, 10, 5),
  productOrderLineItem(31, 3, 5, 10, 5),
  productOrderLineItem(32, 6, 7, 10, 5),
  productOrderLineItem(33, 4, 3, 10, 5),
  productOrderLineItem(34, 6, 2, 10, 5),
  productOrderLineItem(35, 2, 5, 11, 2),
  productOrderLineItem(36, 3, 7, 11, 2),
  productOrderLineItem(37, 4, 0, 11, 2),
  productOrderLineItem(38, 6, 9, 12, 1),
  productOrderLineItem(39, 5, 7, 13, 6),
  productOrderLineItem(40, 8, 6, 13, 6),
  productOrderLineItem(41, 4, 4, 13, 6),
  productOrderLineItem(42, 4, 4, 14, 4),
  productOrderLineItem(43, 8, 6, 14, 4),
  productOrderLineItem(44, 3, 8, 14, 4),
  productOrderLineItem(45, 7, 7, 14, 4),
];

// Complete this function
const PercentageQtySoldPerWeekDay = (AllProductOrderLineItems, pid) => {
  const prodId = AllProductOrderLineItems.filter((prod) => prod.pid === pid).reduce(
    (total, curr) => total + curr.qty,
    0,
  );

  const prodSold = AllProductOrderLineItems.filter((prod) => prod.pid === pid).sort(
    (a, b) => a.dayOfWeek - b.dayOfWeek,
  );

  console.log(prodSold);

  let obj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };
  for (let i = 0; i < prodSold.length; i++) {
    const element = prodSold[i];
    if (element.dayOfWeek === 1) {
      obj['1'] += element.qty;
    } else if (element.dayOfWeek === 2) {
      obj['2'] += element.qty;
    } else if (element.dayOfWeek === 3) {
      obj['3'] += element.qty;
    } else if (element.dayOfWeek === 4) {
      obj['4'] += element.qty;
    } else if (element.dayOfWeek === 5) {
      obj['5'] += element.qty;
    } else if (element.dayOfWeek === 6) {
      obj['6'] += element.qty;
    }
  }
  const result = Object.values(obj).map((prod) => prod / prodId);

  //return [0, []]
  return [[0, ...result], prodId];
};

const test = () => {
  return PercentageQtySoldPerWeekDay(productOrderLineItems, 5);
};

console.log(JSON.stringify(test()));
