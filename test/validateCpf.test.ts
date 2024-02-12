import { validateCpf } from "../src/validateCpf";

test("should test if cpf is valid", function () {
  //given
  const cpf = "94780338085";
  //when
  const isValid = validateCpf(cpf);
  //then
  expect(isValid).toBe(true);
});

test("should test if cpf is valid with one zero digit ", function () {
  //given
  const cpf = "85222469042";
  //when
  const isValid = validateCpf(cpf);
  //then
  expect(isValid).toBe(true);
});

test("should test if cpf is valid with zero digits ", function () {
  //given
  const cpf = "81421665000";
  //when
  const isValid = validateCpf(cpf);
  //then
  expect(isValid).toBe(true);
});

test("should test if cpf is invalid ", function () {
  //given
  const cpf = "422050860";
  //when
  const isValid = validateCpf(cpf);
  //then
  expect(isValid).toBe(false);
});

test("should test if cpf is null ", function () {
  //given
  const cpf = null;
  //when
  const isValid = validateCpf(cpf);
  //then
  expect(isValid).toBe(false);
});

test("should test if cpf is undefined ", function () {
  //given
  const cpf = undefined;
  //when
  const isValid = validateCpf(cpf);
  //then
  expect(isValid).toBe(false);
});

test("should test if every digit is equal", function () {
  //given
  const cpf = "11111111111";
  //when
  const isValid = validateCpf(cpf);
  //then
  expect(isValid).toBe(false);
});
