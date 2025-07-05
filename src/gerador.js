export function gerarSenha(length, useNumbers, useSymbols) {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()-_=+[]{};:,.<>?';
  let charset = letters;

  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * charset.length);
    password += charset[rand];
  }

  return password;
}
