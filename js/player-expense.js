document.getElementById('calculate-btn').addEventListener('click', function(){
    // get per player cost
    const perPlayerCostElement = document.getElementById('per-player-field')
    const perPlayerCostString = perPlayerCostElement.value
    const perPlayerCost = parseFloat(perPlayerCostString)

    // check empty input field
    if(perPlayerCostString === ''){
        return alert('Please enter per player expense!')
    }

    // check negative number
    if(perPlayerCost < 0){
        return alert("Per player expense can't be negative number!")
    }

    // check data type
    if(isNaN(perPlayerCost)){
        return alert('Please enter number inside per player input field!')
    }

    // check anyone selected or not
    const selectedPlayers = document.getElementById('selected-players')
    if(selectedPlayers.childNodes.length === 0){
        return alert('You have not selected any player. Please select at least one player!')
    }

    // calculate players expenses
    const playerExpensesElement = document.getElementById('player-expenses')
    playerExpensesElement.innerText = perPlayerCost * selectedPlayers.childNodes.length
})