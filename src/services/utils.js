import cryptojs from 'crypto-js';

export function cryptoPassword(password) {

const passphrase = import.meta.env.VITE_SECRET_PASSPHRASE;

return cryptojs.MD5(password + passphrase).toString();

//d'aprés richard md5 c'est pas le meilleur pour le cryptage de mot de passe mais pour le moment on va l'utiliser 

}