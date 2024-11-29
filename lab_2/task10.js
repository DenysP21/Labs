const phoneBookHash = {
    'Denys': '+380975554433',
    'Misha': '+380671112233',
    'Vlad': '+380732223344'
};

function findPhoneByNameHash(name) {
    return phoneBookHash[name] || 'Phone not found'; 
}

console.log(findPhoneByNameHash('Denys')); 
console.log(findPhoneByNameHash('noName'))