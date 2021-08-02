const kangoroo = (x1, v1, x2, v2) => {

  const constraintX = x1 < x2;
  const constraintV = (v1 >= 1) && (v1 <= 10000) && (v2 >= 1) && (v2 <= 10000);

  if (constraintV && constraintX) {
    let start1 = x1;
    let start2 = x2;

    if (v2 > v1) return 'NO';

    while (start1 !== start2) {
      if (x1 > x2) return 'NO';
      start1 += v1;
      start2 += v2;
      await sleep(1000);
    }
    return 'YES';
  } else {
    return 'input value doesnt meet requirements';
  }
};

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

console.log(kangoroo(0, 3, 4, 2));
// console.log(kangoroo(0, 2, 5, 3));
