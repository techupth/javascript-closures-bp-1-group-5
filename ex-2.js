function matchAction(x) {
  // Start coding here
  // รับ Parameter 1 ตัวชื่อว่า x เป็น Number

  // Return ตัว Object ที่ประกอบไปด้วย Function 2 ตัว
  return {
    addByX: function (y) {
      // Function แรกชื่อว่า addByX
      // รับ Parameter 1 ตัวชื่อว่า y เป็น Number
      // Function นี้จะ Return ผลลัพธ์ออกมาเป็นการเอา y บวกด้วย x
      return y + x;
    },
    subtractByX: function (y) {
      // Function ที่สองชื่อว่า subtractByX
      // รับ Parameter 1 ตัวชื่อว่า y เป็น Number
      // Function นี้จะ Return ผลลัพธ์ออกมาเป็นการเอา y ลบด้วย x
      return y - x;
    },
  };
}

// Uncomment โค้ดด้านล่างเพื่อดูผลลัพธ์ของการทำงาน

const addByTwo = matchAction(2);
console.log(addByTwo.addByX(1)); // => should return 3
console.log(addByTwo.addByX(2)); // => should return 4
console.log(addByTwo.addByX(3)); // => should return 5

const subtractByThree = matchAction(3);
console.log(subtractByThree.subtractByX(4)); // => should return 1
console.log(subtractByThree.subtractByX(6)); // => should return 3
console.log(subtractByThree.subtractByX(8)); // => should return 5
