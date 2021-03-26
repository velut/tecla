import { Form, Formik, useField } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { LoadIcon } from './LoadIcon';

interface Config {
    readonly name: string;
    readonly source: SourceConfig;
}

interface SourceConfig {
    readonly dir: string;
    readonly globs: string;
}

const emptyConfig: Config = {
    name: '',
    source: {
        dir: '',
        globs: '',
    },
};

const configSchema = yup.object({
    name: yup.string().required('Required'),
    source: yup.object({
        dir: yup.string().required('Required'),
        globs: yup.string(),
    }),
});

export function NewConfigForm() {
    return (
        <Formik
            initialValues={emptyConfig}
            validationSchema={configSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));

                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="max-w-screen-lg pr-8 space-y-4">
                        <TextInput
                            label="Configuration Name"
                            name="name"
                            type="text"
                            placeholder="My configuration"
                        />

                        <DirectoryInput
                            label="Source Directory"
                            name="source.dir"
                            type="text"
                            placeholder="Pictures"
                        />

                        <TextInput
                            label="Glob Patterns"
                            name="source.globs"
                            type="text"
                            placeholder="**/*"
                        />
                    </div>

                    <button
                        className="px-8 py-2 mt-6 bg-green-600 rounded"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Start
                    </button>
                </Form>
            )}
        </Formik>
    );
}

function TextInput({
    label,
    ...props
}: {
    label: string;
    name: string;
    [key: string]: any;
}) {
    const [field, meta] = useField(props);

    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm" htmlFor={props.id || props.name}>
                {label}
            </label>

            <input
                className="border border-gray-400 rounded dark:border-gray-700 dark:bg-gray-900"
                {...field}
                {...props}
            />

            {meta.touched && meta.error && (
                <div className="text-sm text-red-600">{meta.error}</div>
            )}
        </div>
    );
}

function DirectoryInput({
    label,
    ...props
}: {
    label: string;
    name: string;
    [key: string]: any;
}) {
    const [field, meta] = useField(props);

    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm" htmlFor={props.id || props.name}>
                {label}
            </label>

            <div className="flex space-x-2">
                <input
                    className="flex-grow border border-gray-400 rounded dark:border-gray-700 dark:bg-gray-900"
                    {...field}
                    {...props}
                />

                <button
                    className="p-2 border border-gray-400 rounded dark:border-gray-700 dark:bg-gray-900"
                    type="button"
                    title="Select directory"
                >
                    <LoadIcon
                        className="w-6 h-6"
                        aria-label="Select directory icon"
                        title="Select directory"
                        desc="Select directory icon"
                    />
                </button>
            </div>

            {meta.touched && meta.error && (
                <div className="text-sm text-red-600">{meta.error}</div>
            )}
        </div>
    );
}
