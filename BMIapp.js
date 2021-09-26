const height = document.querySelector('#heightInput');
const weight = document.querySelector("#weightInput");
const calcBtn = document.querySelector("#enterBtn");
const answer = document.querySelector("#ans");
const MassIndex = document.querySelector(".massIndex");
const  form = document.querySelector('form');

                calcBtn.addEventListener( 'click', calculate);
              
  function calculate(event , form){
               event.preventDefault();
              
                const calculatedBMI =  Math.floor(weight.value/(height.value**2));
                console.log(calculatedBMI);
      
                                    answer.textContent = (calculatedBMI);
                                  
                      if(calculatedBMI > 18.5 && calculatedBMI <= 24.9){
                        MassIndex.textContent = 'Healthy';
                        MassIndex.style.display = 'block';
    
    
                      }else if(calculatedBMI > 25){
                        MassIndex.textContent = 'Overweight';
                        MassIndex.style.display = 'block'; 
                       
    
                      } else{
                        MassIndex.style.display = 'none';
                      }
                 
                  weight.value = null;
                  height.value = null;
                 
       };
       
  

        
  
