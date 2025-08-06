// 📘 React - list rendering
// map, filter
// 2025-08-06

const fruits = [
  { name: "strawberry", color: "red", size: 2 },
  { name: "banana", color: "yellow", size: 5 },
  { name: "kiwi", color: "green", size: 3 },
  { name: "apple", color: "red", size: 4 },
  { name: "blueberry", color: "blue", size: 1 },
  { name: "orange", color: "orange", size: 4 },
  { name: "grape", color: "purple", size: 2 },
  { name: "lemon", color: "yellow", size: 3 },
  { name: "cherry", color: "red", size: 2 },
  { name: "watermelon", color: "green", size: 8 },
];

// map
// 과일 이름만 담겨있는 배열 만들기
console.log(
  fruits.map((fruit) => {
    return fruit.name;
  })
);

// map
// 과일 이름에 "주스" 붙인 배열 만들기
console.log(
  fruits.map((fruit) => {
    return `${fruit.name} juice`;
  })
);

// filter
// 과일 색이 빨강인 과일만 남긴 배열 만들기
console.log(fruits.filter((fruit) => fruit.color === "red"));

// filter
// 과일 크기가 3 이상인 과일만 남긴 배열 만들기
console.log(fruits.filter((fruit) => fruit.size >= 3));

// filter & map
// 과일 색이 빨강이면서 크기가 3 이상인 과일의 이름만 남긴 배열 만들기
console.log(
  fruits.filter((fruit) => fruit.color === "red" && fruit.size >= 3).map((fruit) => fruit.name)
);
