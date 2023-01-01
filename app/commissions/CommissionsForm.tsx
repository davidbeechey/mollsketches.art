"use client";

import { Form, Formik } from "formik";
import SelectInput from "../../components/forms/SelectInput";
import TextAreaInput from "../../components/forms/TextAreaInput";
import TextInput from "../../components/forms/TextInput";
import * as Yup from "yup";
import Spinner from "../../components/Spinner";
import axios from "axios";

const SIZES = ["Bust", "Bust and Torso", "Full Body"] as const;
type sizes = typeof SIZES[number];

const QUALITIES = ["Sketch", "Colour", "Render"] as const;
type qualities = typeof QUALITIES[number];

// Form URL
const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSe1GAq61Kdluh5r1oD0uZ1uD9mYdjMyOCrDlDInxQVUEzCzfQ/formResponse";

interface FormValues {
    name: string;
    email: string;
    message: string;
    size: sizes | "";
    quality: qualities | "";
}

const CommissionsForm = () => {
    const onSubmit = async (values: FormValues) => {
        console.log(values);

        return axios.post(
            GOOGLE_FORM_URL,
            {
                "entry.378494427": values.name,
                "entry.1818321937": values.email,
                "entry.1707772383": values.size,
                "entry.1381603031": values.quality,
                "entry.1504533932": values.message,
            },
            {
                headers: {
                    "Access-Control-Allow-Origin": true,
                },
            }
        );
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
            onSubmit={onSubmit}
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
                    <button type="submit" className="bg-primary text-white px-4 py-3 rounded-full">
                        {isSubmitting ? (
                            <div className="flex gap-2 items-center">
                                <Spinner />
                                Submitting...
                            </div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default CommissionsForm;
