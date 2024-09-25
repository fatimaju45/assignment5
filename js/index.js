
// noakhali donation

document.getElementById('donate-noakhali')
.addEventListener('click',function(){
    
    const amountNumber= getInputValueById('donation-amount')
    const balance= getTextValueById('my-balance')
    const nCollection=getTextValueById('n-amount')
    // validation
    if(amountNumber<=0 || amountNumber>balance || document.getElementById('donation-amount').value===''){
        
        const signal= alert('Invalid amount')
        const string = document.getElementById('donation-amount').value=''
        return signal+string
    }
    
    
    const newBalance=balance-amountNumber
    const nTotalCollection=nCollection+amountNumber

    document.getElementById('my-balance').innerText=newBalance
    document.getElementById('n-amount').innerText=nTotalCollection
    document.getElementById('donation-amount').value=''
    

    // transaction history
    const historyDiv=document.createElement('div')
   historyDiv.classList.add( 'mx-auto','lg:w-6/12','mb-4','mt-4', 'border','border-solid','rounded-2xl' ,'p-3', 'bg-white')
   historyDiv.innerHTML=`
   <h3 class="text-xl mb-3 font-bold text-black"> ${amountNumber} Taka is Donated for famine-2024 at Noakhali,Bangladesh</h3>
   <p class=" mb-3 text-base text-[#1111114b]">Date: ${new Date().toLocaleDateString(
    'default',{
    weekday:'short',
    month: 'short',
    day:'2-digit',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    
    
   }
   )} GMT +0600 (Bangladesh Standard Time )
   </p>
   `


   document.getElementById('page2').appendChild(historyDiv)
showModal('modal')

})

// feni donation

document.getElementById('donate-feni')
.addEventListener('click',function(){
    
    const amountNumber= getInputValueById('donation-amount-feni')
    const balance= getTextValueById('my-balance')
    const nCollection=getTextValueById('f-amount')

    // validation
    if(amountNumber<=0 || amountNumber>balance || document.getElementById('donation-amount-feni').value==='' ){
        
        const signal= alert('Invalid amount')
        const string = document.getElementById('donation-amount-feni').value=''
        return signal+string
    }
    const newBalance=balance-amountNumber
    const nTotalCollection=nCollection+amountNumber
    document.getElementById('my-balance').innerText=newBalance
    document.getElementById('f-amount').innerText=nTotalCollection
    document.getElementById('donation-amount-feni').value=''

    // transaction feni
    const historyDivFeni=document.createElement('div')
   historyDivFeni.classList.add( 'mx-auto','w-6/12','mb-4','mt-4', 'border','border-solid','rounded-2xl' ,'p-3', 'bg-white')
   historyDivFeni.innerHTML=`
   <h3 class="text-xl mb-3 font-bold text-black"> ${amountNumber} Taka is Donated for famine-2024 at Feni,Bangladesh</h3>
   <p class=" mb-3 text-base text-[#1111114b]">Date: ${new Date().toLocaleDateString(
    'default',{
    weekday:'short',
    month: 'short',
    day:'2-digit',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    
    
   }
   )} GMT +0600 (Bangladesh Standard Time )
   </p>
   `
document.getElementById('page2').appendChild(historyDivFeni)

showModal('modal')


})

// quota donation
document.getElementById('donate-quota')
.addEventListener('click',function(){
    
    const amountNumber= getInputValueById('donation-amount-quota')
    const balance= getTextValueById('my-balance')
    const nCollection=getTextValueById('q-amount')

    // validation
    if(amountNumber<=0 || amountNumber>balance || document.getElementById('donation-amount-quota').value==='' ){
        
        const signal= alert('Invalid amount')
        const string = document.getElementById('donation-amount-quota').value=''
        return signal+string}

    const newBalance=balance-amountNumber
    const nTotalCollection=nCollection+amountNumber
    document.getElementById('my-balance').innerText=newBalance
    document.getElementById('q-amount').innerText=nTotalCollection
    document.getElementById('donation-amount-quota').value=''

    // transaction Quota
    const historyDivQ=document.createElement('div')
   historyDivQ.classList.add( 'mx-auto','w-6/12','mb-4','mt-4', 'border','border-solid','rounded-2xl' ,'p-3', 'bg-white')
   historyDivQ.innerHTML=`
   <h3 class="text-xl mb-3 font-bold text-black"> ${amountNumber} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
   <p class=" mb-3 text-base text-[#1111114b]">Date: ${new Date().toLocaleDateString(
    'default',{
    weekday:'short',
    month: 'short',
    day:'2-digit',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    
    
   }
   )} GMT +0600 (Bangladesh Standard Time )
   </p>
   `
document.getElementById('page2').appendChild(historyDivQ)
showModal('modal')

})
// clicking active btn
document.getElementById('active-donate-btn').addEventListener('click', function(){
    showSection('page1')
    showColor('active-donate-btn')

})

document.getElementById('active-history-btn').addEventListener('click', function(){
    showSection('page2')
    showColor('active-history-btn')
    
})

