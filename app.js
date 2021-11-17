const bill = document.querySelector('.bill');
const billError = document.querySelector('.error-bill');
const people = document.querySelector('.people');
const tips = document.querySelectorAll('.tips');
const inputMain = document.querySelectorAll('.input-long');
const customTips = document.querySelector('.custom-tips');
const allInput = document.querySelectorAll('input');
const active = document.querySelector('.tips-active');
const errorMessages = document.querySelectorAll('.error-messages');
const resetBtn = document.querySelector('#reset');
const regex=/[^0-9]/g;
let reset = false;
let tipsValue=0;
let nbPeople = 0;
let inputTotal=0;
let BoolCustom= false;
let inputValue = [];
let test = [];

// document.addEventListener('keydown', tochange =>{
    
//    checkTips();
// })



let combineAll = () =>{
    // Allow to moove cursor to the end of the input line

    inputMooveCursoToEnd(allInput);
    
    document.addEventListener('click', combine =>{
    detectInput(inputMain);
    checkTips(tips);
    totalPerPerson(detectInput(inputMain),checkTips(tips))
    })
     document.addEventListener('keyup', combine =>{  
    detectInput(inputMain);
    checkTips(tips);
    totalPerPerson(detectInput(inputMain),checkTips(tips))
    })
  
}

let inputMooveCursoToEnd = (e) =>{
e.forEach((elem) =>{
    elem.addEventListener('click', toMoove =>{
                                                   reset = false;

    elem.selectionStart = elem.selectionEnd = elem.value.length;
    })
    })
}

let totalPerPerson = (a,b) => {
    let total = 0;
    let tipAmount = 0;
    const totalNum = document.querySelector('.total-number');
    const tipAmountText = document.querySelector('.tip-number');
    if (BoolCustom == false){
    total = (a+(a/100)*b).toFixed(2);
    tipAmount = (((a/100)*b)).toFixed(2);
    }
    else{
    total =  (a+(b/nbPeople)).toFixed(2);
    tipAmount = (b/nbPeople).toFixed(2);
    }
    if(!isNaN(total) && total != Infinity){
        totalNum.textContent=`$${total}`;
        tipAmountText.textContent=`$${tipAmount}`

    }
}


let checkTips = (tipsContainer) =>{
 tipsContainer.forEach((elem,i) =>{
         elem.addEventListener('click',log =>{
             reset = false;
             if(i==5){
               BoolCustom = true;
              }
              else{

             BoolCustom = false;
              }
             tipsContainer.forEach((elem) =>{
                if (elem.classList.contains("tips-active")){
                    elem.classList.remove('tips-active');
                }
             })
             elem.classList.add('tips-active');
              tipsValue=elem.value;
              
         })
         if (i==5){
             if (elem.value =="" || elem.value == "$"){
                    elem.classList.remove('tips-active');
                    elem.value = "";
             }
        elem.addEventListener('keyup',log =>{
              if(!customTips.value.includes("$") && customTips.value !=""){
                customTips.value = "$" + customTips.value;
            }
             elem.classList.add('tips-active');
             tipsValue=elem.value.substring(1);
         })
         }
 })
 return tipsValue;
}
let detectInput = (a) =>{

for(i=0;i<a.length;i++){
    if((a[i].value =="" || a[i].value ==0) && reset !== true){
        errorMessages[i].classList.add('error-null')
    }
    else {
        errorMessages[i].classList.remove('error-null')
    }
        if(a[i] === document.activeElement){
            if (!isNaN(a[i].value)){
             inputValue.splice(i,1,a[i].value)
            }
        }
    }
             nbPeople = inputValue[1]
             return inputValue[0] / inputValue[1];

}




combineAll();
resetBtn.addEventListener('click',resetAll = ()=> {
reset = true;
   allInput.forEach((elem) =>{
        elem.value ="";
   })
   errorMessages.forEach((error) =>{
        error.classList.remove('error-null')
   })
})