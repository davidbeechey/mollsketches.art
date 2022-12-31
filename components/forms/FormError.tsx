const FormError = ({ error }: { error: string }) => (
    <p className="text-sm text-red-700 dark:text-red-500">{error}</p>
);

export default FormError;
