let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    if(height =="" || weight == ""){
        alert("Please fill out the input field!");
        return;
    }

    // BMI = weight in KG / (height in m * height in m)
    height = height/100;
    let BMI = weight / (height * height);
    BMI = BMI.toFixed(2);
    h3.innerHTML = `Your BMI is: <span>${BMI}</span> kg/m<sup>2</sup>`;

    let h4 = document.querySelector("h4");
    if(BMI < 18.5){
        h4.innerHTML = "Comment: You are <span>Underweight</span>";
    } 
    
    else if(BMI >=18.5 && BMI <25){
        h4.innerHTML = "Comment: You are <span>Healthy</span>";
    }
    
    else if(BMI >=25 && BMI <30){
        h4.innerHTML = "Comment: You are <span>Overweight</span>";
    }

    else{
        h4.innerHTML = "Comment: You are <span>Obese</span>";
    }


})