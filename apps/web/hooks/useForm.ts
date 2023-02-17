import {useEffect, useState} from "react";

type Form = {
    [key: string]: {
        value: string;
        errors: string[];
        completed: boolean;
    };
};
interface FormFields {
    [key: string]: string
}
export interface ValidationObj {
    [key: string]: {
        validator: (value: string) => boolean,
        message: string,
    }[]
}
type ValidatedFormFunc = (form: Form, validation: ValidationObj) => {formData: Form, errors: string[], completed: boolean};

const validatedForm:ValidatedFormFunc = (form, validation) => {
    const formData:Form = {};
    const errors:string[] = [];
    const fields = Object.keys(form);

    fields.forEach((fieldName) => {
        const currErrors: string[] = [];
        const value = form[fieldName].value;

        if (validation[fieldName]) {
            validation[fieldName].forEach((rule) => {
                const touched = form[fieldName].value.length > 0;
                const isValid = rule.validator(value);

                if (!isValid && touched) {
                    currErrors.push(rule.message);
                }
            });
        }

        const currCompleted = value.length > 0 && currErrors.length === 0;

        formData[fieldName] = { value, errors: currErrors, completed: currCompleted };
        errors.push(...currErrors);
    });

    const completedFields = Object.keys(formData).filter((field) => formData[field].completed);
    const completed = completedFields.length === fields.length;

    return { formData, errors, completed };
}

const formInitialize = (formFields: FormFields): Form => {
    const result:Form = {};
    Object.keys(formFields).forEach(((fieldName) => {
        result[fieldName] = { value: formFields[fieldName], errors: [], completed: false };
    }))
    return result;
};

const useForm = (formFields: FormFields, validationObj: ValidationObj) => {
    const [formData, setFormData] = useState<Form>(formInitialize(formFields));
    const [errors, setErrors] = useState<string[]>([]);
    const [completed, setCompleted] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const {
                formData: newFormData,
                errors: newErrors,
                completed: newCompleted
            } = validatedForm(formData, validationObj);

            setFormData(newFormData);
            setErrors(newErrors);
            setCompleted(newCompleted);
        }, 500);

        return () => clearTimeout(timeout);
    }, [formData]);

    return { formData, setFormData, errors, completed } as const;
}

export default useForm;