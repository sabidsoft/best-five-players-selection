document.getElementById('calculate-total-btn').addEventListener('click', function(){
    // get player expenses
    const playerExpensesElement = document.getElementById('player-expenses')
    const playerExpensesString = playerExpensesElement.innerText
    const playerExpensesNumber = parseFloat(playerExpensesString)

    // get manager expense
    const managerExpenseElement = document.getElementById('manager-field')
    const managerExpenseString = managerExpenseElement.value
    const managerExpenseNumber = parseFloat(managerExpenseString)

    // get coach expense
    const coachExpenseElement = document.getElementById('coach-field')
    const coachExpenseString = coachExpenseElement.value
    const coachExpenseNumber = parseFloat(coachExpenseString)

    // check calculate player expenses
    if(playerExpensesString === '00'){
        return alert('Please calculate player expenses before calculate total!')
    }

    // check empty input field 
    if(managerExpenseString === ''){
        return alert('Please enter manager cost!')
    }

    // check number or not
    if(isNaN(managerExpenseNumber)){
        return alert('Please enter number inside manager input field!')
    }

    // check empty input field 
    if(coachExpenseString === ''){
        return alert('Please enter coach cost!')
    }

    // check number or not
    if(isNaN(coachExpenseNumber)){
        return alert('Please enter number inside coach input field!')
    }

    // calculate total
    const totalElement = document.getElementById('total')
    totalElement.innerText = playerExpensesNumber + managerExpenseNumber + coachExpenseNumber
})