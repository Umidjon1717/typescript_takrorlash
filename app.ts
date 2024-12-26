// 1
interface userInfo {
  name: string;
  surname: string;
  age: number;
  admin: boolean;
}

let user: userInfo = {
  name: "John",
  surname: "Doe",
  age: 30,
  admin: true,
};

console.log(
  user.name +
    " " +
    user.surname +
    " is " +
    user.age +
    " years old and is an admin: " +
    user.admin
);

// 2
function RevereseOrder<T>(arr: T[]): T[] {
  return arr.reverse();
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d", "e"];

console.log(RevereseOrder(arr1));
console.log(RevereseOrder(arr2));

// 3

function Finnabocci_Array(n: number): number[] {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

console.log(Finnabocci_Array(10));
console.log(Finnabocci_Array(5));

// 4
function Number_Words_In_String(str: string): number {
  let words = str.split(" ");
  return words.length;
}

console.log(Number_Words_In_String("Hello World"));
console.log(Number_Words_In_String("Hello World, How are you?"));

// 5
function biggest_number(arr: number[]): number | null {
  if (arr.length == 0) {
    return null;
  }
  return Math.max(...arr);
}

console.log(biggest_number([1, 2, 3, 4, 5]));
console.log(biggest_number([]));

// 6
function change_arr(arr: number[] | string[]): number[] | string[] {
    if (typeof arr[0] === "number") {
      return arr.map((num) => (num as number) * 2); 
    } else if (typeof arr[0] === "string") {
      return arr.map((str) => (str as string).toUpperCase()); 
    }
    return []; 
  }
  
  console.log(change_arr([1, 2, 3, 4, 5]));
  console.log(change_arr(["a", "b", "c", "d", "e"])); 
  