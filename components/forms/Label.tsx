interface LabelProps {
    label: string;
    htmlFor: string;
    required: boolean;
}

const Label = ({ label, htmlFor, required }: LabelProps) => (
    <label
        htmlFor={htmlFor}
        className={
            required
                ? "after:content-['*'] after:ml-0.5 after:text-red-600"
                : "after:content-['(optional)'] after:text-sm after:ml-0.5 after:text-gray-600"
        }
    >
        {label}
    </label>
);

export default Label;
