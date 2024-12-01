const people = {
    'Bohdan Khmelnytskyi': { birth: 1596, death: 1657 },
    'Nina Matviienko': { birth: 1947, death: 2023 },
    'Taras Shevchenko': { birth: 1814, death: 1861 },
    'Galileo Galilei': { birth: 1564, death: 1642 }
};

const life = (birthDeath) => {
    let lifespan = {};
    let age;
    for (const name in birthDeath) {
        age = birthDeath[name].death - birthDeath[name].birth
        lifespan[name] = age;
    }
    return lifespan; 
}
console.dir(life(people));