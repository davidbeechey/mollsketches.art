import { useField } from "formik";
import { FieldProps } from "./types";
import InputWrapper from "./InputWrapper";

interface SelectInputProps extends FieldProps {
    options: string[];
    required?: boolean;
    description?: string;
    className?: string;
    placeholder?: string;
}

const SelectInput = ({ options, placeholder = "", ...props }: SelectInputProps) => {
    const [field, meta] = useField(props);

    return (
        <InputWrapper meta={meta} {...props}>
            <select {...field} {...props}>
                <option className="text-gray-600 italic" value="">
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </InputWrapper>
    );
};

export default SelectInput;
