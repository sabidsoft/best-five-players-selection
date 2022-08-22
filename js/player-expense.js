document.getElementById('calculate-btn').addEventListener('click', function(){
    // get per player cost
    const perPlayerCostElement = document.getElementById('per-player-field')
    const perPlayerCostString = perPlayerCostElement.value
    const perPlayerCost = parseFloat(perPlayerCostString)

    // check empty input field
    if(perPlayerCostString === ''){
        return alert('Please enter per player cost!')
    }

    // check data type
    if(isNaN(perPlayerCost)){
        return alert('Please enter number inside per player expense input field!')
    }

    // check 5 players selected or not
    const selectedPlayers = document.getElementById('selected-players')
    if(selectedPlayers.childNodes.length !== 5){
        return alert('Please select 5 players!')
    }

    // calculate player expense
    const playerExpensesElement = document.getElementById('player-expenses')
    playerExpensesElement.innerText = perPlayerCost * 5
})