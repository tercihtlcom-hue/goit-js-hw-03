function filterArray(numbers, value) {
  // 1. Eşleşen sayıları eklemek için boş bir dizi oluştur
  const filteredNumbers = [];

  // 2. numbers dizisinin her öğesi üzerinde dönmek için döngü kullan
  for (let i = 0; i < numbers.length; i++) {
    // 3. Her öğeyi kontrol etmek için if kullan
    if (numbers[i] > value) {
      // Değerden büyükse yeni diziye ekle
      filteredNumbers.push(numbers[i]);
    }
  }

  // 4. Yeni oluşturduğun diziyi döndür
  return filteredNumbers;
}

// Kontrol testleri
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]