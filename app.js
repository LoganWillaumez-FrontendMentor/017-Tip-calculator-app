const bill = document.querySelector('.bill');
const billError = document.querySelector('.error-bill');
const people = document.querySelector('.people');
const tips = document.querySelectorAll('.tips');
const inputMain = document.querySelectorAll('.input-long');
const customTips = document.querySelector('.custom-tips');
const allInput = document.querySelectorAll('input');
const active = document.querySelector('.tips-active');
const regex=/[^0-9]/g;
let tipsValue=0;
let inputTotal=0;
let inputValue = [];

// document.addEventListener('keydown', tochange =>{
    
//    checkTips();
// })
document.addEventListener('click', tochange =>{
    allInput.forEach((elem) =>{
elem.selectionStart = elem.selectionEnd = elem.value.length;
    })
    console.log(checkTips(tips))
    console.log(detectInput(inputMain))
})
document.addEventListener('keyup', tochange =>{
    console.log(checkTips(tips))
    console.log(detectInput(inputMain))
})


// let amountCalc = (a,b) => {

// }


let checkTips = (tipsContainer) =>{
 tipsContainer.forEach((elem,i) =>{
         elem.addEventListener('click',log =>{
             tipsContainer.forEach((elem) =>{
                if (elem.classList.contains("tips-active")){
                    elem.classList.remove('tips-active');
                }
             })
             elem.classList.add('tips-active');
              tipsValue=elem.value;
         })
         if (i==5){
        elem.addEventListener('keyup',log =>{
              if(!customTips.value.includes("$") && customTips.value !=""){
                customTips.value = "$" + customTips.value;
            }
             elem.classList.add('tips-active');
             tipsValue=elem.value;
         })
         }
 })
 return tipsValue;
}


let detectInput = (a) =>{
for(i=0;i<a.length;i++){
        if(a[i] === document.activeElement){
            if (!isNaN(a[i].value)){
             inputValue.splice(i,1,a[i].value)
            }
        }
    }
             return inputValue[0] / inputValue[1];
}
