// const dateOfBirth = document.querySelector("#date-of-birth");
// const luckyNumber = document.querySelector("#lucky-number");
// const checkButton = document.querySelector("#check-number");
// const outputBox=document.querySelector('#output-box')

// checkButton.addEventListener("click", checkBirthdateIsLucky);

// function checkBirthdateIsLucky() {
//   const dob = dateOfBirth.value;
//   const sum = calculatesum(dob);
//   compareValues(sum, luckyNumber.value)
// }
// function calculatesum(dob) {
//   dob = dob.replacesAll("-","");
//   for(let i=0; i<dob.length; i++){
//     sum=sum+Number(dob.charAt(i))
//   }
// return sum;
// }
// function compareValues(sum, luckyNumber){
//  if(sum%luckyNumber===0){
//    console.log("Your Birthday is Lucky")
//  }else{
//    console.log("Your Birthday is not Lucky")
//  }
// }

const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const output = document.querySelector("#output-box");

checkButton.addEventListener("click", function checkLuckyDate() {
    const userDob = dateOfBirth.value.replaceAll("-", "");
    const sum = calculateSum(userDob);
    if (luckyNumber.value && userDob) {
        compareInputs(sum, luckyNumber.value);
    } else {
        output.innerHTML = "Please fill both options"
    }

});

function calculateSum(userDob) {
    let sum = 0;
    for (let i = 0; i < userDob.length; i++) {
        sum = sum + Number(userDob.charAt(i));
    }
    return sum;
}

function compareInputs(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        output.innerHTML = "✨Your BirthDay is Lucky✨";
    } else {
        output.innerHTML = "😑Your Birthday is Unlucky😑";
    }
}