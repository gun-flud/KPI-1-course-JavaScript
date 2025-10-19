function generateKey(length, characters) {
    let keyGen = "";

    for (let i = 0; i <= length; i++) {
        keyGen += characters[Math.floor(Math.random() * characters.length)];
    }
    return keyGen;
}
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
