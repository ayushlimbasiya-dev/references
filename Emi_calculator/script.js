const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanTenure = document.getElementById("loanTenure");

const loanAmountValue = document.getElementById("loanAmountValue");
const interestValue = document.getElementById("interestValue");
const tenureValue = document.getElementById("tenureValue");

const monthlyEmi = document.getElementById("monthlyEmi");
const principalAmount = document.getElementById("principalAmount");
const totalInterest = document.getElementById("totalInterest");
const totalAmount = document.getElementById("totalAmount");


function formatIndianCurrency(number) {
    return "₹" + Math.round(number).toLocaleString("en-IN");
}


function calculateEMI() {

    const principal = Number(loanAmount.value);

    const annualRate = Number(interestRate.value);

    const years = Number(loanTenure.value);


    // Monthly interest rate

    const monthlyRate = annualRate / 12 / 100;


    // Total number of months

    const months = years * 12;


    // EMI calculation

    const emi =
        (principal *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);


    // Total payment

    const totalPayment = emi * months;


    // Total interest

    const interest = totalPayment - principal;


    // Update input values

    loanAmountValue.textContent =
        Math.round(principal).toLocaleString("en-IN");

    interestValue.textContent = annualRate;

    tenureValue.textContent = years;


    // Update result values

    monthlyEmi.textContent =
        formatIndianCurrency(emi);

    principalAmount.textContent =
        formatIndianCurrency(principal);

    totalInterest.textContent =
        formatIndianCurrency(interest);

    totalAmount.textContent =
        formatIndianCurrency(totalPayment);
}


/* Slider events */

loanAmount.addEventListener(
    "input",
    calculateEMI
);

interestRate.addEventListener(
    "input",
    calculateEMI
);

loanTenure.addEventListener(
    "input",
    calculateEMI
);


/* Initial calculation */

calculateEMI();