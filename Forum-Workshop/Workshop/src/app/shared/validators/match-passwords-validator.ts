import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(password: string, rePassword: string): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const pass1 = group.get(password);
    const pass2 = group.get(rePassword);

    return pass1?.value === pass2?.value ? null : { matchPasswordValidator: true };
  };
}
