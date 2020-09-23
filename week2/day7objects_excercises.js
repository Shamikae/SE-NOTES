// Level 0: 
    // 0.1: Creating an object
        // Create an object with the name of a sport
            // Give it 3 key-value pairs including the number of players, required items and one other thing of your choosing.
            var basketball = {
                players: '5', 
                item: ['sneakers','basketball','Hoop'],
                teams: '2'
            };
            console.log(basketball.item)
    // 0.2: Changing Values
        // Using bracket notation 
            // 2a: Add a required item to the current list of required items for that sport
                // Note:
                    // Your required items likely should be an array
                    // Don't just re-write your items, add the new one to the existing list
                    basketball.item.push('shorts')
                    console.log(basketball.item)
            // 2b: Write code that increases the number of players by one
            //basketball.players++
            basketball.players = Number(basketball.players) + 1 // If passed in as a string
            console.log(basketball.players)
            
    // 0.3: Adding Stuff
        // Add country of origin
        basketball.origin = 'USA'
        // Add a boolean for if shoes are required or not for that sport
        basketball['shoes'] = true 
        console.log(basketball)   
// Level 2:
    // 2.1: Creating an object
        // Create an object called house
            // Give it 3 key-value pairs including; size, county, and number of floors. 
        
    // 2.2: Changing Values
        // Using bracket notation 
            // 2a: Change the size of the house
        
            // 2b: Write code that dynamically increases the number of floors by one no matter the current number of floors
                // AKA 1 floor would give 2. 
                // 2 would give 3. 
                // 4 would give 5 etc...

    // 2.3: Adding Stuff
        // Add numberOfAdults as a key with a value of your choosing 
        // Add numberOfKids as a key with a value of your choosing

    // 2.4: Calculate (fake) cost!
        // each person costs 10 
        // and your totalCost is size multiplied by the cost of all people
        // calculate the totalCost
                // add cost to your original house object
        