import React from 'react';
import {
    FormProvider,
    useFieldArray,
    useForm,
    useFormContext,
} from 'react-hook-form';
import { LoadIcon } from './LoadIcon';

/** Values returned from the configuration form inputs */
interface ConfigFormValue {
    /** Configuration name */
    readonly configName: string;

    /** Configuration for source directory */
    readonly source: {
        /** Source directory path */
        readonly dir: string;

        /** Glob patterns for source directory */
        readonly globs: string;
    };

    /** Configuration for destination directories */
    readonly dest: {
        /** List of destination directories */
        readonly dirs: {
            /** Path for a destination directory */
            readonly dir: string;

            /** Hotkey for a destination directory */
            readonly hotkey: string;
        }[];
    };
}

export function NewConfigForm() {
    const formMethods = useForm<ConfigFormValue>();

    const onSubmit = (data: ConfigFormValue) =>
        console.log(JSON.stringify(data, null, 2));

    return (
        <FormProvider {...formMethods}>
            <form
                className="max-w-screen-lg pb-12 pr-12 space-y-8"
                onSubmit={formMethods.handleSubmit(onSubmit)}
            >
                <div className="space-y-4">
                    <ConfigNameInput />
                    <SourceDirInput />
                    <GlobPatternsInput />
                    <DestDirsInputs />
                </div>

                <StartButton />
            </form>
        </FormProvider>
    );
}

function ConfigNameInput() {
    const {
        register,
        formState: { errors },
    } = useFormContext<ConfigFormValue>();

    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm" htmlFor="configName">
                Configuration Name
            </label>

            <input
                className="border border-gray-400 rounded dark:border-gray-700 dark:bg-gray-900"
                type="text"
                placeholder="Organize pictures"
                {...register('configName', { required: true })}
            />

            {errors.configName && (
                <span className="text-red-500">Required</span>
            )}
        </div>
    );
}

function SourceDirInput() {
    const {
        register,
        formState: { errors },
    } = useFormContext<ConfigFormValue>();

    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm" htmlFor="source.dir">
                Source Directory
            </label>

            <div className="flex space-x-2">
                <input
                    className="flex-grow border border-gray-400 rounded dark:border-gray-700 dark:bg-gray-900"
                    type="text"
                    placeholder="Pictures"
                    {...register('source.dir', { required: true })}
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

            {errors.source?.dir && (
                <span className="text-red-500">Required</span>
            )}
        </div>
    );
}

function GlobPatternsInput() {
    const {
        register,
        formState: { errors },
    } = useFormContext<ConfigFormValue>();

    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm" htmlFor="source.globs">
                Glob Patterns for Source Directory
            </label>

            <input
                className="border border-gray-400 rounded dark:border-gray-700 dark:bg-gray-900"
                type="text"
                placeholder="**/*"
                defaultValue="**/*"
                {...register('source.globs', { required: true })}
            />

            {errors.source?.globs && (
                <span className="text-red-500">Required</span>
            )}
        </div>
    );
}

function DestDirsInputs() {
    const {
        register,
        formState: { errors },
        control,
    } = useFormContext<ConfigFormValue>();

    const { fields, append } = useFieldArray({
        name: 'dest.dirs',
        control,
    });

    return (
        <div className="space-y-4">
            {fields.map((field, index) => (
                <div key={field.id} className="flex flex-col space-y-1">
                    <label
                        className="text-sm"
                        htmlFor={`dest.dirs.${index}.dir`}
                    >
                        Destination Directory {index + 1}
                    </label>

                    <label
                        className="sr-only"
                        htmlFor={`dest.dirs.${index}.hotkey`}
                    >
                        Hotkey for Destination Directory {index + 1}
                    </label>

                    <div className="flex space-x-2">
                        <input
                            className="w-12 border border-gray-400 rounded dark:border-gray-700 dark:bg-gray-900"
                            type="text"
                            placeholder={`${index + 1}`}
                            defaultValue=""
                            {...register(`dest.dirs.${index}.hotkey` as const, {
                                required: true,
                            })}
                        />

                        <input
                            className="flex-grow border border-gray-400 rounded dark:border-gray-700 dark:bg-gray-900"
                            type="text"
                            placeholder={`Pictures ${index + 1}`}
                            defaultValue=""
                            {...register(`dest.dirs.${index}.dir` as const, {
                                required: true,
                            })}
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

                    {(errors.dest?.dirs?.[index]?.dir ||
                        errors.dest?.dirs?.[index]?.hotkey) && (
                        <span className="text-red-500">Required</span>
                    )}
                </div>
            ))}

            <button
                className="px-4 py-2 border border-blue-500 rounded"
                type="button"
                onClick={() => {
                    append({
                        dir: '',
                        hotkey: '',
                    });
                }}
            >
                Add Destination Directory
            </button>
        </div>
    );
}

function StartButton() {
    const {
        formState: { isSubmitting },
    } = useFormContext<ConfigFormValue>();

    return (
        <button
            className="px-8 py-2 font-bold text-gray-100 bg-blue-500 rounded"
            type="submit"
            disabled={isSubmitting}
        >
            Start
        </button>
    );
}
