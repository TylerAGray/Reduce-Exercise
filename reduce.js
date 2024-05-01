// extractValue function: Extracts the value of a specified key from an array of objects using reduce
function extractValue(arr, key){
    return arr.reduce(function(acc, next){
        // Pushes the value of the specified key from each object into the accumulator array
        acc.push(next[key]);
        return acc;
    }, []);
}

// vowelCount function: Counts the occurrences of vowels in a string and returns an object with vowel counts using reduce
function vowelCount(str){
    // Define vowels and initialize an empty object to store counts
    const vowels = "aeiou";
    return str.split('').reduce(function(acc, next){
        // Convert character to lowercase
        let lowerCased = next.toLowerCase()
        // Check if the character is a vowel
        if(vowels.indexOf(lowerCased) !== -1){
            // Increment the count for the vowel in the accumulator object
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }, {});
}

// addKeyAndValue function: Adds a key-value pair to each object in an array of objects using reduce
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next, idx){
        // Add the key-value pair to each object in the array
        acc[idx][key] = value;
        return acc;
    }, arr);
}

// partition function: Partitions an array based on the result of a callback function using reduce
function partition(arr, cb){
    return arr.reduce(function(acc, next){
        // Call the callback function on each element and push it into the appropriate subarray
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}
