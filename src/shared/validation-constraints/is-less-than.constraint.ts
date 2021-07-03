import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isLessThan', async: false })
export class IsLessThanConstraint implements ValidatorConstraintInterface {
  validate(
    value: number,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    console.log('value: ', value);
    console.log('validationArguments: ', validationArguments);
    const { object } = validationArguments;
    return validationArguments.constraints.every(
      (constraint) => value < object[constraint],
    );
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return `Property ${validationArguments.property} is not less than ${validationArguments.constraints}`;
  }
}
