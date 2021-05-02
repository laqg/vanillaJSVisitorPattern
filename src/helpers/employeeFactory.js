function Employee(name) {
  this.name = name;
  this.salary = 100;
  this.calculate = function (days) {
    return parseFloat(this.salary * days);
  };
  this.accept = function (fn, args) {
    fn(this, args);
  };
}

export default function createEmployee(name) {
  return new Employee(name);
}
