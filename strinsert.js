const straightInsertion = arr => {
  for (let i=0; i < arr.length; i++) {
    const sortedElement = arr[i];
    let j = i-1;

    while (sortedElement < arr[j]) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = sortedElement;
  }

  return arr;
};

console.log(straightInsertion([5, 4,6,1,23, 812,12,3,1,4]));