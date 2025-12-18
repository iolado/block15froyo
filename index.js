function askForFlavors() {
    return prompt("What flavors would you like: ");
}

function becomeArray(text) {
    return text.split(",").map(f => f.trim());
}

function countFlavors(flavors) {
    const counts = {};

    for (const flavor of flavors) {
        if(counts[flavor]) {
            counts[flavor] += 1;
        } else {
            counts[flavor] = 1;
        }
    }

    return counts;

}

function showFlavors(counts) {
    console.log("what you ordered: ");
    console.log(counts);
}

function start() {
    const userText = askForFlavors();
    const flavorArray = becomeArray(userText);
    const flavorCounts = countFlavors(flavorArray);
    showFlavors(flavorCounts)
}

start();