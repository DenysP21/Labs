const phoneBookArray = [
    { name: 'Denys', phone: '+380975554433' },
    { name: 'Misha', phone: '+380671112233' },
    { name: 'Vlad', phone: '+380732223344' }
];

function findPhoneByNameArray(name) {
    for (const entry of phoneBookArray) {
        if (entry.name === name) {
            return entry.phone;
        }
        else{
            return 'Phone nit found'
        }
    }
}

console.log(findPhoneByNameArray('Denys')); 
console.log(findPhoneByNameArray('noName'))