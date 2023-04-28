// Створити телефонну книгу
// - створити початковий клас Abonent, де зберігатимуться ім*я і номер
// - створити set який прийматиме телефон і номер
// - створити get який виводитиме данні про абонента
// - створити три різних юзери
// - вивести данні

// Зробив 2 варіанти, бо не зовсім зрозуміло завдання.

// 1 варіант
// class Abonent {
//   constructor(name, number) {
//     this.name = name;
//     this.number = number;
//   }
//   telephone = "";
//   set telephone(value) {
//     this.telephone = value;
//   }
//   get info() {
//     return `${this.number}. Ім*я абонента: ${this.name}, Номер телефону: ${this.telephone}`;
//   }
// }
// const Serhii = new Abonent("Serhii", 1);
// Serhii.telephone = 0669051041;
// const Olena = new Abonent("Olena", 2);
// Olena.telephone = 066563357;
// const Oleg = new Abonent("Oleg", 3);
// Oleg.telephone = 445552224;


// console.log(Serhii.info);
// console.log(Olena.info);
// console.log(Oleg.info);

// 2 варіант
// class Abonent {
//   constructor(options) {
//     this.info = options.info;
//   }

//   set info(value) {
//     const infoRow = value.split(" ");
//     this.number = infoRow[0];
//     this.name = infoRow[1];
//     this.telephone = infoRow[2];
//   }

//   get info() {
//     return `${this.number}. Ім*я абонента: ${this.name}, Номер телефону: ${this.telephone}`;
//   }
// }

// const Serhii = new Abonent({
//   info: "1 Serhii 0669051041",
// });

// const Olena = new Abonent({
//   info: "2 Olena 0535634523",
// });

// const Oleg = new Abonent({
//   info: "3 Oleg 0545344532",
// });

// console.log(Serhii);
// console.log(Olena);
// console.log(Oleg);