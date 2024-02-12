// @ts-nocheck
function clean(cpf: string) {
  return cpf
    .replace(".", "")
    .replace(".", "")
    .replace("-", "")
    .replace(" ", "");
}

function isInvalidCpf(cpf: string) {
  return cpf.length !== 11;
}

function hasAllDigitsEqual(cpf: string) {
  return cpf.split("").every((c) => c === cpf[0]);
}

function extractLastDigits(cpf: string) {
  return cpf.substring(cpf.length - 2, cpf.length);
}

export function validateCpf(cpf: any) {
  if (!cpf) return false;
  cpf = clean(cpf);
  if (isInvalidCpf(cpf)) return false;
  if (hasAllDigitsEqual(cpf)) return false;
  let d1 = 0;
  let d2 = 0;
  for (let nCount = 1; nCount < cpf.length - 1; nCount++) {
    const digito = parseInt(cpf.substring(nCount - 1, nCount));
    d1 = d1 + (11 - nCount) * digito;
    d2 = d2 + (12 - nCount) * digito;
  }
  let rest = d1 % 11;
  const dg1 = rest < 2 ? 0 : 11 - rest;
  d2 += 2 * dg1;
  rest = d2 % 11;
  const dg2 = rest < 2 ? 0 : 11 - rest;
  return extractLastDigits(cpf) === `${dg1}${dg2}`;
}

// se nao variavel = 0, false, undefined, null, "", NaN
