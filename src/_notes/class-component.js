// 📘 React - Class Component
// 2025-08-06

// 📝 Person 클래스 정의
class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  greet() {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  }
}

// 인스턴스 생성 및 메서드 호출
const person1 = new Person("혜빙구", 30, "여");
person1.greet(); // 안녕하세요, 저는 혜빙구입니다.

// 📝 Student 클래스 (Person 상속)
class Student extends Person {
  constructor(name, age, sex, grade) {
    super(name, age, sex); // 부모(Person)의 생성자 호출
    this.grade = grade;
  }

  // greet 메서드 오버라이딩 (재정의, greet 메서드를 덮어씀)
  greet() {
    console.log(`${this.name}: 태정태세문단세`);
  }
  // Student만의 고유 메서드
  study() {
    console.log(`${this.name}: 공부중인척`);
  }
}

// 인스턴스 생성 (Student는 Person도 상속받음)
const student1 = new Student("짱구", 10, "남성", "A");
student1.greet(); // 짱구: 태정태세문단세
student1.study(); // 짱구: 공부중인척
