import { validateCpf } from "../src/validateCpf";

test.each(["94780338085", "85222469042", "81421665000"])(
  "should test if cpf is valid: %s",
  function (cpf: string) {
    //when
    const isValid = validateCpf(cpf);
    //then
    expect(isValid).toBe(true);
  }
);

test.each(["422050860", null, undefined, "11111111111"])(
  "should test if cpf is invalid: %s ",
  function (cpf: any) {
    //when
    const isValid = validateCpf(cpf);
    //then
    expect(isValid).toBe(false);
  }
);
