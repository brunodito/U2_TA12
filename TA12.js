function generatePassword (length) {
    const may = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const min = 'abcdefghijklmnopqrstuvwxyz'
    const num = '0123456789'
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    function getRandomChar(chars) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        return chars[randomIndex];
    }
    const Chars = getRandomChar(may) + getRandomChar(min) + getRandomChar(num) + getRandomChar(chars)

    const allChars = may + min + num + chars

    return Chars
}

console.log(generatePassword(8))