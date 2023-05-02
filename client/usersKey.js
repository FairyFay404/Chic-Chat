import forge from 'node-forge';

/* format of users and key is "userId AESKEY"*/
/* we will use format key in localStorage.setItem(userId, keyObj) */
/* keyObj = "{cipher: cipher, aesKey: aesKey, iv: iv}" */
/* before use you should parse string to Json first */
/* example keyObjString = localStorage.getItem(userId) */
/* keyObj = JSON.parse(keyObjString) */

/* function for add user key in arrays */

export const encryptDataAES = (cipherObj, plaintext, iv) => {
    cipherObj.start({iv: iv});
    cipherObj.update(forge.util.createBuffer(plaintext));
    cipherObj.finish();
    const encryptedData = cipherObj.output.getBytes();
    return encryptedData;
}

export const decryptDataAES = (cipherObj, aesKey, iv, ciphertext) => {
    const decipher = forge.cipherObj.createDecipher('AES-CBC', aesKey);
    decipher.start({iv: iv});
    decipher.update(forge.util.createBuffer(ciphertext));
    decipher.finish();
    const decryptedData = decipher.output.getBytes();
    return decryptedData;
} 
