function Input (str) {
    return str.split("").reverse().join("")

}
Input("hello");

     // //c2
// function input (str) {
//     var output = "";
//     for (var i= str.length - 1; i>=0; i--) {
//         output += str(i);
//     }
// }
// input("hello")

// bài 2 
function unique_arr(arr) {
    var newArr = []
    newArr = arr.filter(function (item) {
      return newArr.includes(item) ? '' : newArr.push(item)
    })
    return newArr
  }
  
  let num = [1, 2, 3, 5, 4, 2, 6, 4];
  
  console.log(unique_arr(num));

// bài 3