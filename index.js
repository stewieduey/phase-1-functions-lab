function distanceFromHqInBlocks(blocks){
if(blocks > 42){
return blocks - 42;
} else {
    return 42 - blocks
}
}

function distanceFromHqInFeet(blocks){
return distanceFromHqInBlocks(blocks) *264;
}

function distanceTravelledInFeet(starting, ending){
    const result = (ending - starting) * 264;
    if (starting > ending){  
        return result * -1
} else {
    return result
}
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    }  else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500){    
        return 25
        } else if (distance > 2500) {
            return 'cannot travel that far'
        }
}
