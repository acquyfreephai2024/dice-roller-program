function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value
    const diceResult = document.getElementById("diceResult")
    const diceImagesResult = document.getElementById("diceImagesResult")
    const diceFaces = []
    const diceImages = []
    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor((Math.random() * 6) + 1)
        diceFaces.push(value)
        diceImages.push(`<img src="dice-images/${value}.png" alt="Dice ${value}">`)
    }
    diceResult.textContent = `Dice(s): ${diceFaces.join(", ")}`
    diceImagesResult.innerHTML= diceImages.join('')
}