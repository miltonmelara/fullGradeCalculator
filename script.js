let exams;
let portfolios;
const submit = document.getElementById('submit');
let answers;
const examGrades = document.getElementById('exam-grades')
const portfolioGrades = document.getElementById('portfolio-grades')
function setValue (){
    exams = examGrades.value;
    portfolios = portfolioGrades.value;
}

submit.addEventListener('click', setValue);
const form = document.getElementById('calculator')

function handleForm(e) {
    e.preventDefault();
}

examGrades.addEventListener('change', setValue);
portfolioGrades.addEventListener('change', setValue);
form.addEventListener('submit', handleForm);
submit.addEventListener('click', setValue);

//Exams arrays

let examsArr = [];
function examStringToArray(){
    let examsArrOfStr;
    if(examGrades.value === 0){
        alert('Please type a value in')
    } else {
         examsArrOfStr = exams.split(',');
    }

     examsArrOfStr.forEach(string => {
        examsArr.push(Number(string));
      });
      return examsArr
}

submit.addEventListener('click', examStringToArray);

//Portfolio arrays

let portfolioArr = [];

function portfolioStringToArray() {
    let portfolioArrOfStr;
    if(portfolioGrades.value === 0){
        alert('Please type a value in')
    } else {
        portfolioArrOfStr = portfolios.split(',');
    }

    portfolioArrOfStr.forEach(string => {
        portfolioArr.push(Number(string));
      });
      return portfolioArr;
}
submit.addEventListener('click', portfolioStringToArray)

//Final exam grade

const finalEx = document.getElementById('finalEx-grade');
let finalExGrade;
 
function setFinalExGrade() {
    finalExGrade = finalEx.value;
}

finalEx.addEventListener('change', setFinalExGrade)
//Calculate grade and zone

let resultContainer = document.getElementById('results');

function calculateGradeAndZone(portArr, examArr, finalExGrade) {
    let portfolioAverage = (portArr.reduce((a,b) => a+b, 0)) / portArr.length;
    let examsAverage = (examArr.reduce((a,b) => a+b, 0)) / examArr.length;
    let portfolioZone = portfolioAverage*0.25;
    let examsZone = examsAverage*0.40;
    let totalZone = Math.round(portfolioZone + examsZone);
    let totalGrade = totalZone + Math.round(finalExGrade*0.35)

    const result = `Final grade: ${totalGrade}, total zone: ${totalZone}`;
    return result
}

//Show results 

function displayResult(){
    resultContainer.innerHTML = calculateGradeAndZone(portfolioArr, examsArr, finalExGrade);
}


submit.addEventListener('click', displayResult)
