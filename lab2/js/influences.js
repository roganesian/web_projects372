const influences = {
    name: "Dad",
    age: 49,
    qualities: ["hardworking", "kind", "funny", "intelligent"]
}

console.log(influences.name);
console.log("Age: " + influences.age);
console.log("Qualities:");
for (var i = 0; i < influences.qualities.length; i++) {
    console.log(influences.qualities[i]);
}

function Partner(name, birthYear, hobbies) {
    this.name = name;
    this.birthYear = birthYear;
    this.hobbies = hobbies;
}

var partner = new Partner("Julianna", 2002, ["oragami"] )

function getAge(birthYear) {
    return 2024 - birthYear;
}

console.log("My partner " + partner.name + " is " + getAge(partner.birthYear) + " years old and loves to do " + partner.hobbies[0] + "!");