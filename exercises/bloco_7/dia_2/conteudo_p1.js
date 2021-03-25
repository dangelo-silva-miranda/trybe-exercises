const addNewKey = (object, keyName, value) => {
  object[keyName] = value;
  return object;
}

// objeto original
const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
  address: {
    avenue: "Mozart",
    number: {
      cpf: 055,
      titulo: "TRE"
    }
  }
};

// impressão do objeto original
console.log(`Objeto customer: `, customer);

// novo objeto que recebe uma cópia de customer
const novo = JSON.parse(JSON.stringify(Object.assign({}, customer)));

// impressão do objeto novo
console.log(`Objeto novo: `, novo);

// o novo objeto tem um valor modificado
novo.address.number.titulo = "Macunaíma";
// novo.address.avenue = "Macunaíma";

// reimpressão do objeto original
console.log(`Objeto customer após modificação em objeto novo: `, customer);

// impressão do novo objeto
console.log(`Objeto novo após ser modificado: `, novo);

// console.log(addNewKey(customer, 'lastName', 'Ferreira'));
// console.log(addNewKey(customer, 'fullName', `${customer.firstName} ${customer.lastName}`));