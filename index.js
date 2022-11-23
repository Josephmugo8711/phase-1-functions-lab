// Code your solution in this file!
//distanceFromHqInBlocks:
// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(distance) {
    //returns the number of blocks given a value
    const hq = 42
    if(distance < hq){
        return hq - distance
    }else {
        return distance - hq
    }
  }
  distanceFromHqInBlocks(43)
  //distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location. Use your distanceFromHqInBlocks 
  //function to help return the correct value here. Try something like this:
  //distanceTravelledInFeet: Calculates the number of feet a passenger 
  //travels given a starting block and an ending block — 
  //it only calculates distance North and South (uptown/downtown).
  // It uses the knowledge that a block is 264 feet long.
  

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance)* 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(destination>start){//uptown
        return (destination - start)*264
    }else if(start>destination){
        return (start - destination)*264
    }
}
distanceTravelledInFeet() 

//calculatesFarePrice: Given the same starting and ending block as the previous 
  //test (hint hint), return the fare for the customer. The first four hundred feet are free. 
  //For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, 
  //which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
  // Finally, Scuber does not allow any rides over 2500 feet —
  // the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start,destination);
    if(distance <= 400){
        return 0
    }else if(distance > 400 && distance < 2000){
        return (distance - 400) * 0.02
    }else if(distance > 2000 && distance < 2500){
        return 25
    }else if(distance>2500){
        return 'cannot travel that far'
    }
}
calculatesFarePrice(start, destination)

 
  

