export function horaAtual() {
  let agora = new Date();
  let msg = agora.toLocaleDateString() + " " + agora.toLocaleTimeString();
  return msg;
}

export function formatDate(date = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
         `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}