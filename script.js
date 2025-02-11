const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");
const lengthInput = document.getElementById("length");
const lengthVal = document.getElementById("length-val");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";


// função para gerar a senha aleatória
function generatePassword() {
    let length = lengthInput.value;
    let charset = "";

    // checa se as checkboxes estão selecionadas
    if (uppercaseCheck.checked) charset += uppercaseChars;
    if (lowercaseCheck.checked) charset += lowercaseChars;
    if (numbersCheck.checked) charset += numberChars;
    if (symbolsCheck.checked) charset += symbolChars;
    
    if (charset === "") {
        passwordField.value = "Selecione pelo menos uma opção";
            return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    passwordField.value = password;
}

// função para copiar a senha, com alert exibido
function copyToClipboard() {
 navigator.clipboard.writeText(passwordField.value).then(() => {
    alert("Senha copiada!");
    });
}

// 
lengthInput.addEventListener("input", () => {
    lengthVal.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);


// função para fazer o style do range funcionar
const rangeInput = document.getElementById("length");

function updateRangeBackground() {
  const value = rangeInput.value;
  const min = rangeInput.min;
  const max = rangeInput.max;
  const percent = ((value - min) / (max - min)) * 100;

  // atualiza a cor preenchida conforme o thumb se move
  rangeInput.style.setProperty("--progress", percent + "%");
}

// executa quando o usuário move o range
rangeInput.addEventListener("input", updateRangeBackground);

// chama a função para atualizar ao carregar a página
updateRangeBackground();