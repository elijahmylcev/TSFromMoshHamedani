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

// Tuples = кортежи
// Массив фиксированной длины, где каждый эл-т имеет опр тип

let user: [number, string] = [1, 'Mosh'] // in JS Tuples is Array

user.push(1); // Problem in TS(Так как кортежи имеют фиксированную длину)

// Enums перечисления
// Список связанных констант

const small = 1;
const medium = 2;
const large = 3;

// PascalCase first letter uppercase
const enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium;
console.log(mySize);

// functions
function calculateTax(income: number, taxYear = 2022): number {
 if ((taxYear || 2022) < 50000) {
  return income * 1.2;
 }
 return income * 1.3
}

calculateTax(10_000)
// void - пустота