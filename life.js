let ageInput=document.querySelector("#ageInput");
let calcBtn=document.querySelector("#calcBtn");
let resetBtn=document.querySelector("#resetBtn");
let result=document.querySelector("#result");
let refresh=document.querySelector(".refresh");
let displayResult = document.querySelector("#displayResult");

let myTimer;
let age1;

    
 calcBtn.addEventListener('click', function()
 {
     
    age1 = ageInput.value; 
    if(age1 == "" )
     {
        clearInterval(myTimer);
        let alert1 = document.querySelector(".alert1");
        alert1.classList.add('active');
        myTimer = setInterval( function () {
            alert1.classList.remove('active');

        }, 1000) 
     }

        else if (isNaN(age1) == true)
         {
            clearInterval(myTimer);
            let alert2 = document.querySelector(".alert2");
            alert2.classList.add('active');
            myTimer = setInterval( function () {
                alert2.classList.remove('active')
    
            }, 1000)
         }
         else {
             let answer = document.querySelector(".answer");
             answer.classList.add('active');
             let remaining_years = 90 - age1;
             let remaining_weeks = remaining_years * 52;
             result.innerHTML = remaining_weeks;
             ageInput.value = "";
         }
});
function separateNumbersInComma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


resetBtn.addEventListener('click', function () {
    refresh.click();
})