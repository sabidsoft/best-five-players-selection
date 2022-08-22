document.getElementById('calculate-btn').addEventListener('click', function(){
    const inputElement = document.getElementById('per-player-field')
    const inputString = inputElement.value
    const inputNumber = parseFloat(inputString)

    if(inputString === ''){
        return alert('Please enter per player cost!')
    }

    if(isNaN(inputNumber)){
        return alert('Please enter number!')
    }

    const selectedPlayers = document.getElementById('selected-players')
    if(selectedPlayers.childNodes.length !== 5){
        return alert('Please select 5 players!')
    }

    const playerExpensesElement = document.getElementById('player-expenses')
    playerExpensesElement.innerText = inputNumber * 5
})