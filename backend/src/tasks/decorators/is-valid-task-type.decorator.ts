import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
} from 'class-validator';

export function IsValidTaskType(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsValidTaskType',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const task = args.object as any;
                    if (task.type === 'DEADLINE') {
                        if (task.deadline === undefined) return true;
                        return (
                            !!task.deadline && !task.startTime && !task.endTime
                        );
                    }
                    if (task.type === 'CALENDAR') {
                        if (
                            task.startTime === undefined &&
                            task.endTime === undefined &&
                            task.deadline === undefined
                        ) {
                            return true;
                        }
                        return (
                            (!!task.startTime || !!task.endTime) &&
                            !task.deadline
                        );
                    }
                    return false;
                },
                defaultMessage() {
                    return 'Invalid fields for Update of specific task type';
                },
            },
        });
    };
}
