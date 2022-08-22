// player selector function
function selectPlayer(playerId, playerName){
    document.getElementById(playerId).addEventListener('click', function(){
        // get selected players ordered list element
        const selectedPlayers = document.getElementById('selected-players')
        
        // check number of players whether greater than 5
        if(selectedPlayers.childNodes.length >=5){
            return alert("You can't select more than 5 players!")
        }

        // create player list and append list
        const li = document.createElement('li')
        li.innerText = playerName
        selectedPlayers.appendChild(li)

        // change some style
        const messi = document.getElementById(playerId)
        messi.style.background = '#A2A9AF'
        messi.disabled = true

        // change the style based on child node exist or not
        if(selectedPlayers.childNodes.length !== 0){
            const selectionMsg = document.getElementById('selection-msg')
            selectionMsg.style.display = 'none'
        }
    })
}