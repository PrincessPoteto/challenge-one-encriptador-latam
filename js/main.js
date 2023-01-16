const textareamsj = document.querySelector("#textarea"); // Textarea del mensaje a encriptar/desencriptar
const Encryptbtn = document.querySelector("#encriptar"); // Botón para encriptar
const Decryptbtn = document.querySelector("#desencriptar"); // Botón para desencriptar
const Copybtn = document.querySelector("#copiar"); // Botón para copiar el mensaje resultante
const Result = document.querySelector("#resultado"); // Textarea para mostrar el mensaje resultante

const textareamsjEncrypt = txt => {
  // Función para encriptar una sola letra
    switch (txt) {
    case 'a':
        return 'ai';
    case 'e':
        return 'enter';
    case 'i':
        return 'imes';
    case 'o':
        return 'ober';
    case 'u':
        return 'ufat';
    default:
        return txt;
    }
};

const encrypt = txt => {
  // Función para encriptar un mensaje completo
  const textEncrypted = txt.replace(/a|e|i|o|u/g, textareamsjEncrypt); // Reemplaza cada letra por su versión encriptada
  toggleElementVisibility('ocultar', false); // Oculta el elemento con id 'ocultar'
  toggleElementVisibility('resultado', true); // Muestra el elemento con id 'resultado'
  toggleElementVisibility('copiar', true); // Muestra el elemento con id 'copiar'
    return textEncrypted;
};

const textareamsjDecrypt = txt => {
    switch (txt) {
    case 'ai':
        return 'a';
    case 'enter':
        return 'e';
    case 'imes':
        return 'i';
    case 'ober':
        return 'o';
    case 'ufat':
        return 'u';
    default:
        return txt;
    }
};

const desencriptar = txt => {
    const textDecrypted = txt.replace(/ai|enter|imes|ober|ufat/g, textareamsjDecrypt);
    toggleElementVisibility('ocultar', false); // Oculta el elemento con id 'ocultar'
    toggleElementVisibility('resultado', true); // Muestra el elemento con id 'resultado'
    toggleElementVisibility('copiar', true); // Muestra el elemento con id 'copiar'
    if (txt === textareamsjEncrypt) return Result;
    else return textDecrypted;
};

Encryptbtn.addEventListener("click", event => {
    event.preventDefault();
    const txt = textareamsj.value;
    const textResult = encrypt(txt);
    Result.value = textResult;
});

Decryptbtn.addEventListener("click", event => {
    event.preventDefault();
    const txt = textareamsj.value;
    const msjSeguro = desencriptar(txt);
    Result.value = msjSeguro;
});

Copybtn.addEventListener("click", event => {
    event.preventDefault();
    Result.select();
    navigator.clipboard.writeText(Result.value);
});

const toggleElementVisibility = (elementId, shouldShow) => {
    const element = document.getElementById(elementId);
    if (shouldShow) {
    element.style.display = 'block';
    } else {
    element.style.display = 'none';
    }
};