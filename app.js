 
 function udpateItemNumber(item,price,isIncriment){
    const itemInput=document.getElementById(item+'-input',price)
    let itemNumber=itemInput.value
    if(isIncriment===true){
       itemNumber=parseInt(itemNumber)+1
    }
    else if(isIncriment===false && itemNumber>0){
        itemNumber=parseInt(itemNumber)-1
    }
    itemInput.value=itemNumber

    const caseingTotal=document.getElementById(item +'-total')
    caseingTotal.innerText=itemNumber*price
    calculator()
}


function phoneInputValue(item){
    const itemInput=document.getElementById(item+'-input')
    const itemNumber=parseInt(itemInput.value)
    return itemNumber
}
function calculator(){
    const caseingTotal=phoneInputValue('phone')*1278
    const phoneTotal=phoneInputValue('casing')*59
    const subTotal=phoneTotal+caseingTotal
    const tax=subTotal/10
    const total=subTotal+tax

    document.getElementById('sub-total').innerText=subTotal
    document.getElementById('tax').innerText=tax
    document.getElementById('total').innerText=total
}



document.getElementById('phone-plus').addEventListener('click',function(){
    udpateItemNumber('phone',1278,true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    udpateItemNumber('phone',1278, false)
})


//caseing plus-minus
document.getElementById('casing-plus').addEventListener('click',function(){
    udpateItemNumber('casing',59,true)
})
document.getElementById('casing-minus').addEventListener('click',function(){
   udpateItemNumber('casing',59,false)
})





// without function

// document.getElementById('casing-plus').addEventListener('click',function(){
//     const caseingInput=document.getElementById('casing-input')
//     const caseingInputValue=caseingInput.value
//     const caseingInputNumber=parseInt(caseingInputValue)+1
//     caseingInput.value=caseingInputNumber
    
//     //casing total
//     const casingTotal=document.getElementById('casing-total')
//     const casingTotalInnertext=casingTotal.innerText
//     const casingTotalNumber=parseInt(casingTotalInnertext)
//     casingTotal.innerText=casingTotalNumber+1
// })

// // caseing-minus
// document.getElementById('casing-minus').addEventListener('click',function(){
//     const caseingInput=document.getElementById('casing-input')
//     const caseingInputValue=caseingInput.value
//     const caseingInputNumber= parseInt(caseingInputValue)
//     if(caseingInputNumber>0){
//         caseingInput.value=caseingInputNumber-1
//     }

//     // casing-totoal
//     const casingTotal=document.getElementById('casing-total')
//     const casingTotalInnertext=casingTotal.innerText
//     const casingTotalNumber=parseInt(casingTotalInnertext)
//     casingTotal.innerText=casingTotalNumber-1
// })





//   prbm my own code function
// function udpateCasingAmount(isIncriment){
//     const caseingInput=document.getElementById('casing-input')
//     const caseingInputValue=caseingInput.value
//     const caseingInputNumber=parseInt(caseingInputValue)
    
//     if(isIncriment===true){
//       caseingInput.value=caseingInputNumber+1
//     }  
//      else if(isIncriment===false  &&caseingInputNumber>0){
//       caseingInput.value=caseingInputNumber-1
//      }
//      const casingTotal=document.getElementById('casing-total')
//      const casingTotalInnertext=casingTotal.innerText
//      const casingTotalNumber=parseInt(casingTotalInnertext)
//       casingTotal.innerText=caseingInputNumber+1
//   }