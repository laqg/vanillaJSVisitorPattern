import "./styles.css";
import createEmployee from "./helpers/employeeFactory";

document.getElementById("app").innerHTML = `
<h1>Visitor</h1>
<div>
  <small>Days worked: </small><input id='days' type='number' min=1 max=30 value=0>
  <br>
  <small>Salary: <i id='salary'>$ 0</i></small>
</div>
<div>
  <small>Update new salary per day: </small><input id='newSalary'>
  <small><i id='error'></i></small>
  <small><i id='success'></i></small>
  <br>
  <button id='update'>Update</button>
</div>
`;

const employee = createEmployee("Luis");

function updateSalary(emp, args) {
  emp.salary = args[0];
  document.getElementById("success").innerHTML = "salary updated!";
  document.getElementById("days").value = 0;
  document.getElementById("salary").innerHTML = `$ 0`;
}

document.getElementById("days").addEventListener("change", (e) => {
  const days = e.target.value;
  const salary = employee.calculate(days);
  document.getElementById("success").innerHTML = "";
  document.getElementById("salary").innerHTML = `$ ${salary}`;
});

document.getElementById("update").addEventListener("click", () => {
  const newSalaryInput = document.getElementById("newSalary");
  const newSalary = parseFloat(newSalaryInput.value);
  if (!isNaN(newSalary)) {
    employee.accept(updateSalary, [newSalary]);
    document.getElementById("error").innerHTML = "";
  }
  if (isNaN(newSalary)) {
    document.getElementById("error").innerHTML = "Please enter a valid number";
  }
  newSalaryInput.value = "";
});
