// level 0
    // Declare an object called person. 
    // Give the person several properties, including full name, height, and more
    // You'll be using this object for the remaining questions.
var person = {
    name: 'John Brown',
    height: `6'2"`,
    weight: '210lbs',
    age: '35',
    eyeColor: 'Brown'

};
console.log(person)
    // Q0.1
        // Add an email key value pair to the object called person
person['email'] = 'JBrown@gmail.com'
console.log(person)
// level 1
    // Q 1.1    
        // Write some code that extracts the end of the email address
        // Log that to the console 
            // example 
                // input:
                //person = {
                    //fullName = 'Nic Leask',
                    //email = 'nic@gmail.com',
                //}
                // output:
                //'@gmail.com'
                
console.log('@' + person.email.split('@').pop())
// level 2
    // Q 2.1
        // write a conditional statement which checks if the person is 5'11", shorter, or taller.
        // If the person is the same log, "Same height as Beckham"
        // If the person is taller log, "Taller than Beckham"
        // If the person is shorter log, "Shorter than Beckham"
            // hint there are 12 inches in a foot, you may want to convert the height into only inches
            //console.log((person.height.slice(0,-1)))

            
            function heightConvert(str){
                let feet = Number.str.split("'")[0];
                let inches = Number(str.split("'")[1].slice(0,-1));
                console.log(feet, inches);
                person.heightInInches = inches + (feet*12);
            }
                if ( person.heightInInches === 71 ){
                    console.log("Same height as Beckham" )
                } else if ( height > 71){
                    console.log("Taller than Beckham")}
                 else if (height < 71){
                    console.log("Shorter than Beckham")
                 }

// }
    // Q 2.2
        // Create a function which takes in an object 
        // If the object doesn't have a specific key return 'No such value'.
        // If it does, return that key's value. 
var key = 'name'
var car = {
    color: 'blue',
    name: 'BMW',
    doors: '2',
} 
function drive(name, key){
    if (name [key]){
        console.log(car.name)

    }else{
        return 'No such value.'

    }

}
console.log(drive(car,'name'))
// level 3
    // Q 3.1
        // Using the full name property, get the person's initials.
        // Create a new key called initials.
        // Set the value of this key to the person's initials.
            // Hint if you're getting stuck refer to last nights assignment in "SEInstructorNotes\Assignments\Day7Loops.js"

            person.length = 5;
            var firstInitial = (person.fullName.slice(0, 1));
            var lastInitial = (person.fullName.slice(8, 9));
            var initials = firstInitial + [','] + lastInitial
            console.log(initials)

            person['Initials'] = initials
            console.log(person)