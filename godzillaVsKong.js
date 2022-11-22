function godzillaVsKong (input) {
    let budget = Number(input[0])
    let statists = Number(input[1])
    let clothesPrice = Number(input[2])

    let decor = 0.10 * budget; 
    let totalClothesPrice = statists * clothesPrice; 

    if (statists > 150) {
        totalClothesPrice = 0.90 * totalClothesPrice
    }

    let totalCost = decor + totalClothesPrice; 

     if (totalCost > budget) {
        moneyNeeded = totalCost - budget
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    } else if (totalCost <= budget) {
        moneyLeft = budget - totalCost
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }

}

godzillaVsKong(["9587.88",

"222",

"55.68"])