const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


const finalPosition = function(arrayname) {
    let x = 0;
    let y = 0;

    for (let value of moves) {
        if (value === "north") {
            y += 1;
        } else if (value === "west") {
            x -= 1;
        } else if (value === "east") {
            x += 1;
        } else if (value === "south") {
            y -= 1;
        } else {
            console.log("this is not a direction");
        }
    }
    return [x,y];
    
}

console.log(finalPosition(moves));