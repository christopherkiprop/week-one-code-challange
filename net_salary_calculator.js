
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// PAYE Calculation process//
//if grossSalary is less than 24k, then we get paye by multiplying 10% of grossSalary//
//if grossSalary is less than 32333, then we get 10% of 24k// 
function myPaye(grossSalary) {
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = (24000 * 0.10) + ((grossSalary - 24000) * 0.25);
    } else {
        paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.30);
    }
    return paye;
}
// NHIF Calculation process//
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}
// NSSF Calculation process//
function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 1080);
}
//asks the user to input his/her salary and the benefits//
//transfers the numbers to a function that checks the data type of the numbers//
rl.question("What is your basic Salary: ", function(basicSalaryInput) {
    rl.question(" what amount do you get in benefits: ", function(benefitsInput) {
        const myBasicSalary = parseFloat(basicSalaryInput);
        const myTotalBenefits = parseFloat(benefitsInput);

//checks is the number given is in the correct form if not an error is displayed to the user//
        if (isNaN(myBasicSalary) || isNaN(myTotalBenefits)) {
            console.log("Invalid input. Please enter numeric values.");
            rl.close();
            return;
        }
        // 
        const grossSalary = myBasicSalary + myTotalBenefits;
        const paye = myPaye(grossSalary);
        const nhif = calculateNHIF(grossSalary);
        const nssf = calculateNSSF(grossSalary);
        const netSalary = grossSalary - (paye + nhif + nssf);
        // print out the values in a formated way//
        console.log(Gross Salary: KES ${grossSalary.toFixed(2)});
        console.log(PAYE (Tax): KES ${paye.toFixed(2)});
        console.log(NHIF Deduction: KES ${nhif.toFixed(2)});
        console.log(NSSF Deduction: KES ${nssf.toFixed(2)});
        console.log(Net Salary: KES ${netSalary.toFixed(2)});

//stops readline to stop any input//
        rl.close();
    });
});