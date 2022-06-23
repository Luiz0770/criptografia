const crypto = require("crypto");
const  alg = "aes-256-ctr"
const  secret = "abcdabcd"

//Texto que sera criptografado
const text = 'Corithians o maior'

//function crypt(text) {

    //Criptrografia
    const cipher = crypto.createCipher(alg,secret)
    const crypted = cipher.update(text, 'utf8', 'hex')
    console.log('Texto criptografato: ' + crypted)
//}

//function decrypt(text) {

    //Descriptrografia
    const decipher = crypto.createDecipher(alg,secret)
    const plain = decipher.update(crypted, 'hex', 'utf8')
    console.log('Texto descriptografato: ' + plain)
//}


