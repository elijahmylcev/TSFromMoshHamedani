let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level; //any

// The any type
level = 1;  // Bad practice
level = 'a';  // Bad practice

function render(document: any) {
  console.log(document);
}

// The array type

let numbers: number[] = [1, 2, 3]
let numbersAny: any[] = []

numbers.forEach(n => n.toLocaleString)

// Tuples = Картежи