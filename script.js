const forms = document.querySelectorAll('form');
const body = document.querySelector('body');
const container = document.querySelector('.container');
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let weight = parseFloat(document.querySelector('#weight').value);
        let height = parseFloat(document.querySelector('#height').value);


        let resultElement = document.querySelector("#results");
        if (isNaN(weight) || isNaN(height)) {
            resultElement.innerHTML = 'Invalid input. Please enter valid numbers for weight and height.';
            resultElement.style.color='red';
            body.style.backgroundColor='IndianRed';
            return;
        }

        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            resultElement.innerHTML = `<h2>Your BMI is ${bmi}. You are underweight.</h2>`;
            container.style.backgroundColor = 'red';
            form.style.color = 'white';
        }
        if (bmi > 18.6 && bmi <= 24.9) {
            resultElement.innerHTML = `<h2>Your BMI is ${bmi}. Your weight is Normal.</h2>`;
            container.style.backgroundColor = 'green';
            form.style.color = 'white';
        }
        if (bmi > 24.9) {
            resultElement.innerHTML = `<h2>Your BMI is ${bmi}. Your are over weighted.</h2>`;
            container.style.backgroundColor = 'yellowgreen';
            form.style.color = 'darkblue';
        }
    });
});


// for clock

const clock = document.querySelector('#clock');

setInterval(()=>{
    let date = new Date();

    clock.innerHTML =`Time: ${date.toLocaleTimeString()}`;


}, 1);
clock.style.color='blue';
clock.style.padding='10px'


const date = document.querySelector('#date');
setInterval(()=>{

    let d = new Date();
    date.innerHTML=`Date: ${d.toDateString()}`;
},1) // 

date.style.color='blue';
date.style.padding='10px'
