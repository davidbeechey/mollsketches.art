import { FieldMetaProps } from "formik";
import { cloneElement, ReactElement } from "react";
import { FieldProps } from "./types";
import FormError from "./FormError";
import Label from "./Label";

interface InputWrapperProps extends FieldProps {
    placeholder?: string;
    required?: boolean;
    children: ReactElement;
    meta: FieldMetaProps<any>;
    description?: string;
    className?: string;
}

const InputWrapper = ({
    label,
    required = false,
    children,
    description,
    meta,
    className = "",
    ...props
}: InputWrapperProps) => {
    const SHOW_ERROR = meta.touched && meta.error;
    const DEFAULT_STYLES = "border-2 rounded-lg text-gray-900 dark:bg-black dark:text-gray-200 p-2";

    // Add error styling to input if there is an error.
    const input = cloneElement(children, {
        className: `${DEFAULT_STYLES} ${children.props.className} ${
            SHOW_ERROR ? "border-red-500" : "border-gray-300 dark:border-gray-700"
        }`,
        required: false, // stop HTML required action.
    });

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && <Label label={label} htmlFor={props.id || props.name} required={required} />}
            {description && (
                <p className="text-sm dark:text-gray-300 text-gray-500 mb-1">{description}</p>
            )}
            {input}
            {SHOW_ERROR ? <FormError error={meta.error as string} /> : null}
        </div>
    );
};

export default InputWrapper;
