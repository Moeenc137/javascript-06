//arrays:

let marks = [90, 87, 33, 54, 23, 59];

let students = ["Bilal", "Ahmed", "Moiz", "Saim"];

console.log(marks);
console.log(marks.length);

//array indices:

console.log(marks[2]); //to acess an array item
console.log((marks[3] = 78)); // to change an array item

//looping in arrays

//for loop:

for (idx = 0; idx < students.length; idx++) {
  console.log(students[idx]);
}

//for-of loop:
for (let stu of students) {
  console.log(stu);
}

//practice:

//find average of all the students marks in the class:

sum = 0;

for (val of marks) {
  sum += val;
}

let avg = val / marks.length;

console.log(avg);

//add minus 10% offer in every item:

let items = [250, 645, 300, 900, 50];

let mult = 10;

for (idx0 = 0; idx0 < items.length; idx0++) {
  let offer = items[idx0] / 10;
  items[idx0] -= offer;
  console.log(`price after 10% offer on item: ${items[idx0]}`);
}

//array methods:

let fruits = ["apple", "banana", "kiwi", "mango"];

fruits.push("watermelon"); //to add somthing in array. only add somthing in end
console.log(fruits);

fruits.pop(); // to remove somthing. only remove from end
console.log(fruits);

console.log(fruits.toString); //converts array to a string
