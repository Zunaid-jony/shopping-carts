function updateCaseNumber(isInreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
  
    
    if( isInreasing == true){
        caseNumber  = parseInt(caseNumber) + 1;
       
    }
    else if(caseNumber > 0){
        caseNumber  =  parseInt(caseNumber) - 1;

    }
    caseInput.value = caseNumber;
    // update case totall 
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
//............................................................................
}
function updateCaseNumberPhone(isInreasingPhone){
    const caseInput = document.getElementById('phone-number');
    let phoneNumber = caseInput.value;
  
    
    if( isInreasingPhone == true){
        phoneNumber  = parseInt(phoneNumber) + 1;
       
    }
    else if(phoneNumber > 0){
        phoneNumber  =  parseInt(phoneNumber) - 1;

    }
    caseInput.value = phoneNumber;
    // update case totall 
    const caseTotal = document.getElementById('phone-total');
    caseTotal.innerText = phoneNumber * 1219;

}
// handle phone ...................
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumberPhone(true);
    
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumberPhone(false);
})





// handle case increase decrease events 
document.getElementById('case-plus').addEventListener('click', function(){
   updateCaseNumber(true);

//    const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     const previusNumber = parseInt(caseNumber)
//     caseInput.value = previusNumber + 1;

})

document.getElementById('case-minus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    updateCaseNumber(false);
 



})