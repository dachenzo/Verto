import {
    Validate,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isFutureDateValidator', async: false })
class IsFutureDateValidator implements ValidatorConstraintInterface {
    validate(
        date: Date,
        validationArguments?: ValidationArguments,
    ): Promise<boolean> | boolean {
        const now = new Date();
        return date > now;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return 'Date must be in the future!';
    }
}

export function IsFutureDate(validationOptions: ValidationOptions) {
    return Validate(IsFutureDateValidator, validationOptions);
}
