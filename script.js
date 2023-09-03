const form = document.getElementById("form");
const day = document.getElementById("day");
const month= document.getElementById("month");
const year = document.getElementById("year")
const daysOutput = document.getElementById("day_output")
const monthsOutput = document.getElementById("month_output")
const yearsOutput = document.getElementById("year_output")
const inputFormat = document.querySelectorAll(".dateFormatValidator")
const labelValidity = document.querySelectorAll(".label-validity")


const yearEl = new Date();
const currentYear = yearEl.getFullYear();



//VALIDATE FORM INPUT
function displayAge()
{
    if ((month.value == 4 && day.value > 29) || day.value > 31)
    {
   let daylabel = document.getElementById("day-label")
      daylabel.style.color ='rgb(223,113,120)'  ;
       document.querySelector(".error-msg-day").style.display = 'block';
    }
    else if(year.value > parseInt(currentYear))
    {
        let yearlabel = document.getElementById("year-label");
        yearlabel.style.color ='rgb(223,113,120)'  ;
         document.querySelector(".error-msg-year").style.display = 'block';
    }
    else if(month.value > 12)
    {
        let monthlabel = document.getElementById("month-label")
        monthlabel.style.color ='rgb(223,113,120)'  ;
         document.querySelector(".error-msg-month").style.display = 'block'   ;
    }
    else{
       
        labelValidity.forEach(l =>{
            l.style.color = "hsl(0, 1%, 44%)";
        })

        document.querySelector(".error-msg-day").style.display = 'none';
        document.querySelector(".error-msg-month").style.display = 'none'; 
        document.querySelector(".error-msg-year").style.display = 'none';

        let convertedYear =  parseInt(currentYear) - year.value;
        yearsOutput.innerText = convertedYear;
        
        let convertedMonth =  convertedYear * 12;
        monthsOutput.innerText = convertedMonth;

        //Convert the years into days considering leap year
        let convertedDay = 365.25 * convertedYear;
        daysOutput.innerText = Math.floor(convertedDay);
    }
}


inputFormat.forEach(input=>{
    input.addEventListener("change",()=>{
     if ((input.name == "Day" || input.name == "Month") || input.name == "Year")
     {
        if ((day.value.length > 2 || month.value.length > 2) || year.value.length > 4 )
        {
            input.value = "";
        }
     }
   
     
    })
})


//CHECKS IF FORM FIELDS ARE EMPTY
function emptyInput()
{
    inputFormat.forEach(input=>{
        if(day.value == "" || month.value == "" || year.value == "")
        {
            alert("Some fields are empty")
        }
        else
        {
            displayAge()
        }
    })
}


//EXECUTES EVENTS WHEN THE ENTER BUTTON IS CLICKED ON KEYBOARD
form.addEventListener("keydown",(e)=>{
    if (e.key == "Enter"){
        e.preventDefault();
        emptyInput()
    }
})
