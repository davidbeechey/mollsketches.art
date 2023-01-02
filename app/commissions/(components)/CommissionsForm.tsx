"use client";

import { Form, Formik } from "formik";
import SelectInput from "components/forms/SelectInput";
import TextAreaInput from "components/forms/TextAreaInput";
import TextInput from "components/forms/TextInput";
import Spinner from "components/Spinner";
import * as Yup from "yup";
import axios from "axios";

const SIZES = ["Bust", "Bust and Torso", "Full Body"] as const;
type sizes = typeof SIZES[number];

const QUALITIES = ["Sketch", "Colour", "Render"] as const;
type qualities = typeof QUALITIES[number];

export interface FormValues {
    name: string;
    email: string;
    message: string;
    size: sizes | "";
    quality: qualities | "";
}

const CommissionsForm = () => {
    const onSubmit = async (values: FormValues, resetForm: () => void) => {
        return axios
            .post("/api/commissions", values)
            .then(() => {
                resetForm();
            })
            .catch((err) => console.log(err));
    };

    const initialValues: FormValues = {
        name: "",
        email: "",
        message: "",
        size: "",
        quality: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        message: Yup.string().required("Please provide a description"),
        size: Yup.string()
            .oneOf(SIZES.slice(), "Please select a size")
            .required("Please select a size"),
        quality: Yup.string()
            .oneOf(QUALITIES.slice(), "Please select a quality")
            .required("Please select a size"),
    });

    return (
        <Formik<FormValues>
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form className="space-y-4" noValidate>
                    <TextInput
                        label="Full name and preferred pronouns:"
                        name="name"
                        placeholder="Your name..."
                        type="text"
                        required
                    />
                    <TextInput
                        label="Email address:"
                        name="email"
                        placeholder="Your email..."
                        type="email"
                        required
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                        <SelectInput
                            label="Size:"
                            name="size"
                            options={SIZES.slice()}
                            placeholder="Select a size..."
                            required
                        />
                        <SelectInput
                            label="Quality:"
                            name="quality"
                            options={QUALITIES.slice()}
                            placeholder="Select a quality..."
                            required
                        />
                    </div>
                    <TextAreaInput
                        label="Brief Drawing Description:"
                        name="message"
                        description="More detail can be given at a later point"
                        placeholder="Your message..."
                        required
                    />
                    <div className="w-full flex justify-center">
                        <button
                            type="submit"
                            className="bg-primary text-white px-4 py-3 rounded-full w-1/2 "
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
                </Form>
            )}
        </Formik>
    );
};

export default CommissionsForm;
