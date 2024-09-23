
// noakhali donation

document.getElementById('donate-noakhali')
.addEventListener('click',function(){
    
    const amountNumber= getInputValueById('donation-amount')
    const balance= getTextValueById('my-balance')
    const nCollection=getTextValueById('n-amount')
    
    const newBalance=balance-amountNumber
    const nTotalCollection=nCollection+amountNumber

    document.getElementById('my-balance').innerText=newBalance
    document.getElementById('n-amount').innerText=nTotalCollection
    document.getElementById('donation-amount').value=''

    // transaction history
    const div=document.createElement('div')
   div.classList.add('border','border-solid','rounded-2xl')
   div.innerHTML=`
   <h3 class=""> $
   `
})

// feni donation

document.getElementById('donate-feni')
.addEventListener('click',function(){
    
    const amountNumber= getInputValueById('donation-amount-feni')
    const balance= getTextValueById('my-balance')
    const nCollection=getTextValueById('f-amount')
    
    const newBalance=balance-amountNumber
    const nTotalCollection=nCollection+amountNumber
    document.getElementById('my-balance').innerText=newBalance
    document.getElementById('f-amount').innerText=nTotalCollection
    document.getElementById('donation-amount-feni').value=''
})

// quota donation
document.getElementById('donate-quota')
.addEventListener('click',function(){
    
    const amountNumber= getInputValueById('donation-amount-quota')
    const balance= getTextValueById('my-balance')
    const nCollection=getTextValueById('q-amount')
    
    const newBalance=balance-amountNumber
    const nTotalCollection=nCollection+amountNumber
    document.getElementById('my-balance').innerText=newBalance
    document.getElementById('q-amount').innerText=nTotalCollection
    document.getElementById('donation-amount-quota').value=''
})
document.getElementById('active-donate-btn').addEventListener('click', function(){
    showSection('page1')
    showColor('active-donate-btn')

})

document.getElementById('active-history-btn').addEventListener('click', function(){
    showSection('page2')
    showColor('active-history-btn')
})