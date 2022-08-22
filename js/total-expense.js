document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const playerExpensesElement = document.getElementById('player-expenses')
    const playerExpensesString = playerExpensesElement.innerText
    const playerExpensesNumber = parseFloat(playerExpensesString)

    const managerExpenseElement = document.getElementById('manager-field')
    const managerExpenseString = managerExpenseElement.value
    const managerExpenseNumber = parseFloat(managerExpenseString)

    const coachExpenseElement = document.getElementById('coach-field')
    const coachExpenseString = coachExpenseElement.value
    const coachExpenseNumber = parseFloat(coachExpenseString)

    const totalElement = document.getElementById('total')
    totalElement.innerText = playerExpensesNumber + managerExpenseNumber + coachExpenseNumber
})