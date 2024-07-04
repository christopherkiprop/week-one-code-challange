function checkSpeed() {
    // to determine if the driver goes over 70//
    const speedLimit = 70;
    // if the limit is exceeded by 5km/h one demerit will be issued//
    const kmPerDemeritPoint = 5;
    // maximum points the driver can get until license gets suspended//
    const pointsThreshold = 12;

    // Prompt user to enter the speed in  km/h//
    let speed = prompt("Enter the speed of the car (in km/h):");
    // it prompts an error if the input is not a number//
    if (isNaN(speed)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    // it evaluates if the input speed is less than the speed limit 70km/h//
    if (speed < speedLimit) {
    // if the condition is met it logs ok//
        console.log("Ok");
    } else {
    //calculates the demerit points on how much the speed has been exceeded by also calculates how much the speed exceeds the limit // 
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    // it will display the demerit points if the speed limit is exceeded//
        console.log(`Points: ${demeritPoints}`);
    // if the demerit points exceed the point threshold which is 12 the license will be logged as suspended//
        if (demeritPoints > pointsThreshold) {
            console.log("License suspended");
        }
    }
}

// prompt the user to enter the speed of the driver //
checkSpeed();       
