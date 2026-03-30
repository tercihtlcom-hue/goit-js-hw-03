function makeArray(firstArray, secondArray, maxLength) {
  const allArray = firstArray.concat(secondArray);

  if (allArray.length > maxLength) {
    return allArray.slice(0, maxLength);
  }

  return allArray;
}

// 1. Test
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 

// 2. Test
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); 

// 3. Test (DÜZELTİLEN YER: Buraya iki ayrı dizi ve bir sayı ekledik)
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); 

// 4. Test
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 

// 5. Test
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
