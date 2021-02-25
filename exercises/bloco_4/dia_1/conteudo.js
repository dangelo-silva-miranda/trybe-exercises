const name = "Dângelo";
const birthCity = "Ipatinga-MG";
let birthYear = 1984;

console.log(`Name: ${name}`);
console.log("birthCity: "+birthCity);
console.log("birthYear: "+birthYear);

birthYear = 2020;
console.log("birthYear: "+birthYear);

/*
birthCity = "Belo Horizonte-MG";
console.log("birthCity: "+birthCity);
 Como birthCity é uma variável do tipo constante não pode ser redefinida. */

 let patientId = 50;
 let isEnrolled = true;
 const patientInfo = {
   firstName: 'Ana',
   lastName: 'Santos',
 };
 const patientEmail = 'ana@email.com';

 console.log("patientId: "+typeof patientId);

 console.log("isEnrolled: "+typeof isEnrolled);

 console.log("patientInfo: "+typeof patientInfo);

console.log("patientEmail: "+typeof patientEmail);

 console.log("patientAge: "+typeof patientAge);

 patientId = '50';

 console.log("patientId: "+typeof patientId);

 let base = 5;
 let altura = 8;
 console.log('base: ' + base);
 console.log('altura: ' + altura);

 let area =  base * altura;
 console.log('area: ' + area);

 let perimetro = 2 * (base + altura);
 console.log('perimetro: ' + perimetro);