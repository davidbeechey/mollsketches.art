/**
 * Reusable spinner component.
 * @returns The spinner component
 */
export const Spinner = ({ colour = "blue" }: { colour?: string }) => (
    <div
        style={{ borderTopColor: "transparent" }}
        className={`flex spinner w-4 h-4 border-2 border-${colour}-700 border-solid rounded-full animate-spin`}
    />
);
