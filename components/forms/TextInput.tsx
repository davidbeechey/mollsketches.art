import { useField } from "formik";
import { HTMLInputTypeAttribute } from "react";
import InputWrapper, { FieldProps } from "./InputWrapper";

interface TextInputProps extends FieldProps {
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    required?: boolean;
    description?: string;
    className?: string;
}

const TextInput = (props: TextInputProps) => {
    const [field, meta] = useField(props);

    return (
        <InputWrapper meta={meta} {...props}>
            <input {...field} {...props} />
        </InputWrapper>
    );
};

export default TextInput;
