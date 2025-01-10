import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
} from 'class-validator';

export function IsValidEndTime(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsValidEndTime',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(date: Date, args: ValidationArguments) {
                    const task = args.object as any;
                    if (task.startTime) {
                        return date > task.startTime;
                    }
                    return false;
                },
                defaultMessage() {
                    return 'Endtime must be greater than start time';
                },
            },
        });
    };
}
