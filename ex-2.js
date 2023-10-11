function matchAction(x) {
//   return  {
    
//     function addByX(y) {
//     return  x + y;
//    },
  
//    function subtractByX(y) {
//     return y - x
//    }
//   }
// Q: อยากรู้ว่าทำไมชุดข้างบนถึงไม่มีค่าออกมา ทั้งที่เราก็ใส่ให้มันอยู่ใน object แล้ว 
//------------------------------------------------------
// ส่วนอันที่ถูกเข้าใจว่า เราปรับให้มันเป็น key แทน 
// (addbyX: , subtractbyX: คือ key)
 return {
    addByX: function(y) {
      return x + y;
    },
    subtractByX: function(y) {
      return y - x;
    }
  };
}



const addByTwo = matchAction(2);
console.log(addByTwo.addByX(1)); // => should return 3
console.log(addByTwo.addByX(2)); // => should return 4
console.log(addByTwo.addByX(3)); // => should return 5

const subtractByThree = matchAction(3);
console.log(subtractByThree.subtractByX(4)); // => should return 1
console.log(subtractByThree.subtractByX(6)); // => should return 3
console.log(subtractByThree.subtractByX(8)); // => should return 5

