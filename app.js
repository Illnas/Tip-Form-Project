

//getting ids from form
let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let calculate = document.getElementById("calculate");


//getting ids from section
let billResult = document.getElementById("billResult");
let tipResult = document.getElementById("tipResult");
let calculateResult = document.getElementById("calculateResult");


//getting id for form and section with results from calculations
let form = document.getElementById("form");
let results = document.getElementById("results");

//reset
let another = document.getElementById("another");

//percentage
let tipPercentage = `0.${tip.value}`;


// calculations onclick event
calculate.onclick = (e) => {
  e.preventDefault();

  //error preventions
  if (bill.value === "") {
    billResult.value = "";
    tipResult.value = "";
    calculateResult.value = "Error";
  }

  //calculations logic
  if (bill.value !== "") {
    billResult.value = `${bill.value}$`;
    tipResult.value = `${eval(bill.value * tipPercentage).toFixed(4)}$`;
    calculateResult.value = `${
      parseFloat(bill.value) +
      parseFloat(eval(bill.value * tipPercentage).toFixed(4))
    }$`;
  }


  //display changes
  form.style.display = "none";
  results.style.display = "flex";
};


//reset onclick logic
another.onclick = (e) => {
  form.reset();
  form.style.display = "flex";
  results.style.display = "none";
};
