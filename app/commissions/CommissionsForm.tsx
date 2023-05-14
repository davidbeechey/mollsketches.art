"use client";

import { Spinner } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cx } from "classix";
import { submitForm } from "./submit";
import toast from "react-hot-toast";

const SIZES = ["Bust", "Bust and Torso", "Full Body"] as const;
const QUALITIES = ["Sketch", "Colour", "Render"] as const;

const CommissionsSchema = z.object({
    name: z.string().nonempty({
        message: "Name is required",
    }),
    email: z
        .string()
        .nonempty({
            message: "Email is required",
        })
        .email({
            message: "Please provide a valid email address",
        }),
    message: z.string().nonempty({
        message: "Please provide a description",
    }),
    size: z.enum(SIZES, {
        required_error: "Please select a size",
    }),
    quality: z.enum(QUALITIES, {
        required_error: "Please select a quality",
    }),
});

export type CommissionsSchema = z.infer<typeof CommissionsSchema>;

const CommissionsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CommissionsSchema>({
        resolver: zodResolver(CommissionsSchema),
        defaultValues: {
            email: "",
            message: "",
            name: "",
            quality: "Sketch",
            size: "Bust",
        },
    });

    const onSubmit: SubmitHandler<CommissionsSchema> = async (data) => {
        const id = toast.loading("Submitting...");
        const result = await submitForm(data);
        if (result.sent) {
            toast.success("Submitted successfully!", {
                id,
            });
            reset();
        } else {
            toast.error("Something went wrong, please try again later", {
                id,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="name"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                    Name and preferred pronouns:
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Your name..."
                    className={cx(
                        "border-2 rounded-lg text-gray-900 dark:bg-black dark:text-gray-200 p-2",
                        errors.name ? "border-red-500" : "dark:border-gray-600 border-gray-100"
                    )}
                    {...register("name")}
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="email"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                    Email address:
                </label>
                <input
                    type="text"
                    id="email"
                    placeholder="Your email..."
                    className={cx(
                        "border-2 rounded-lg text-gray-900 dark:bg-black dark:text-gray-200 p-2",
                        errors.email ? "border-red-500" : "dark:border-gray-600 border-gray-100"
                    )}
                    {...register("email")}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="size"
                        className="after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                        Size:
                    </label>
                    <select
                        id="size"
                        className={cx(
                            "border-2 rounded-lg text-gray-900 dark:bg-black dark:text-gray-200 p-2",
                            errors.size ? "border-red-500" : "dark:border-gray-600 border-gray-100"
                        )}
                        {...register("size")}
                    >
                        {SIZES.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    {errors.size && <span className="text-red-500">{errors.size.message}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="quality"
                        className="after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                        Quality:
                    </label>
                    <select
                        id="quality"
                        className={cx(
                            "border-2 rounded-lg text-gray-900 dark:bg-black dark:text-gray-200 p-2",
                            errors.quality
                                ? "border-red-500"
                                : "dark:border-gray-600 border-gray-100"
                        )}
                        {...register("quality")}
                    >
                        {QUALITIES.map((quality) => (
                            <option key={quality} value={quality}>
                                {quality}
                            </option>
                        ))}
                    </select>
                    {errors.quality && (
                        <span className="text-red-500">{errors.quality.message}</span>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="quality"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                    Brief drawing description{" "}
                    <span className="text-sm">(More details can be discussed later)</span>:
                </label>
                <textarea
                    id="message"
                    placeholder="Your message..."
                    className={cx(
                        "border-2 rounded-lg text-gray-900 dark:bg-black dark:text-gray-200 p-2",
                        errors.message ? "border-red-500" : "dark:border-gray-600 border-gray-100"
                    )}
                    {...register("message")}
                />
                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
            </div>
            <div className="w-full flex justify-center">
                <button
                    type="submit"
                    className="bg-primary transition hover:-translate-y-1 text-white px-4 py-3 rounded-full w-1/2"
                >
                    {isSubmitting ? (
                        <div className="flex gap-2 items-center justify-center">
                            <Spinner />
                            Submitting...
                        </div>
                    ) : (
                        "Submit"
                    )}
                </button>
            </div>
        </form>
    );
};

export default CommissionsForm;
