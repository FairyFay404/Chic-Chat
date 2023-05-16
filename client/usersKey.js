import forge from 'node-forge';

/* format of users and key is "userId AESKEY"*/
/* we will use format key in sessionStorage.setItem(userId, keyObj) */
/* keyObj = "{cipher: cipher, aesKey: aesKey, iv: iv}" */
/* before use you should parse string to Json first */
/* example keyObjString = sessionStorage.getItem(userId) */
/* keyObj = JSON.parse(keyObjString) */

/* function for add user key in arrays */

export const encryptDataAES = (aesKey, iv, plaintext) => {
    const cipherObj = forge.cipher.createCipher('AES-CBC', aesKey);
    cipherObj.start({iv: iv});
    cipherObj.update(forge.util.createBuffer(plaintext));
    cipherObj.finish();
    const encryptedData = cipherObj.output.getBytes();
    return encryptedData;
}

export const decryptDataAES = (aesKey, iv, ciphertext) => {
    const decipher = forge.cipher.createDecipher('AES-CBC', aesKey);
    decipher.start({iv: iv});
    decipher.update(forge.util.createBuffer(ciphertext));
    decipher.finish();
    const decryptedData = decipher.output.getBytes();
    return decryptedData;
} 

export const encryptDataRSA = (plaintext, publicKeyPem) => {
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const encryptData = publicKey.encrypt(plaintext, 'RSA-OAEP');
    return encryptData;
}

export const decryptDataRSA = (ciphertext, privateKeyPem) =>{
    const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
    const decryptData = privateKey.decrypt(ciphertext, 'RSA-OAEP');
    return decryptData;
}
