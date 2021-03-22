// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type

// const spacecraftName: string = 'Determination'
// const speedMph: number = 17500
const kilometersToMars: number = 225000000
const kilometersToTheMoon: number = 384400
// const milesPerKilometer: number = 0.621

// Part 2: Print Days to Mars

// let milesToMars: number = kilometersToMars * milesPerKilometer
// let hoursToMars: number = milesToMars / speedMph
// let daysToMars: number = hoursToMars / 24

// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.



// Part 4: Create a Spacecraft Class

class Spacecraft {
   
    name: string;
    speedMph: number;
     milesPerKilometer: number = 0.621;
    constructor(name: string, speedMPH: number){
        this.name = name
        this.speedMph = speedMPH
    }

   getDaysToLocation(kilometersAway: number): number{
    let milesAway: number = kilometersAway * this.milesPerKilometer
    let hoursToDestination: number = milesAway / this.speedMph
    let daysToLocation: number = hoursToDestination / 24
    return daysToLocation
    } 

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }

}

// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

// console.log (`${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToMars)} to reach Mars.`)
// console.log (`${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to reach the Moon.`)

spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
