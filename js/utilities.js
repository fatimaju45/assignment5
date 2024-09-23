

function getInputValueById(id){
    const inputValue= document.getElementById(id).value
    const inputNumber=parseFloat(inputValue)
    return inputNumber
 }
 function getTextValueById(id){
    const TextValue= document.getElementById(id).innerText
    const TextNumber=parseFloat(TextValue)
    return TextNumber
 }

 function showSection(id){
   document.getElementById('page1').classList.add('hidden')
   document.getElementById('page2').classList.add('hidden')
   document.getElementById(id).classList.remove('hidden')
   
 }

 function showColor(id){
   document.getElementById('active-donate-btn').classList.remove('bg-[#B4F461]')
   document.getElementById('active-history-btn').classList.remove('bg-[#B4F461]')
   document.getElementById(id).classList.add('bg-[#B4F461]')
 }

 
   
 