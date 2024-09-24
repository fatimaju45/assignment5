

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

 
  function showModal(id){
    
    const modal= document.getElementById(id).classList.remove('hidden')
    const addStyle= document.getElementById('whole-section').classList.add('bg-gray-200' )
    return modal+addStyle
    
  }

  function closeModal(){
    const modal= document.getElementById('modal')
    const close= modal.classList.add('hidden')
    const removeStyle= document.getElementById('whole-section').classList.remove('bg-gray-200' )
    return close+removeStyle
  }
  
  
 