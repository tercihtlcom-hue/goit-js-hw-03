function makeArray(firstArray, secondArray, maxLength) {
  // 1. İki diziyi birleştiriyoruz (concat metodu ile)
  const allArray = firstArray.concat(secondArray);

  // 2. Uzunluk kontrolü yapıyoruz
  if (allArray.length > maxLength) {
    // Eğer uzunluk sınırı aşıyorsa, 0'dan maxLength'e kadar olan kısmı alıyoruz
    return allArray.slice(0, maxLength);
  }

  // 3. Sınırı aşmıyorsa tamamını döndürüyoruz
  return allArray;
}


// Kontrol testlerini altına ekle
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango", "Ajax", "Chelsea", "Poly", "Houston"], 3)); // Hata almamak için 2. parametreyi unutma!
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []