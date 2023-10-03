/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
    label?: string;
    id?: string;
    type?: HTMLInputTypeAttribute;
    register?: UseFormRegister<any>;
    errors?: string;
    placeholder?: string;
    classNameLabel?: "";
    classNameError?: "";
    name?: string;
};

export const Input = ({
    label,
    id,
    type = "text",
    register,
    errors,
    placeholder,
    // classNameLabel,
    // classNameError,
    name,
}: InputProps) => {
    return (
        <div>
            {!!label && (
                <label htmlFor={id} className="font-bold">
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
            {!!errors && <p className="text-red-500 text-14">{errors}</p>}
        </div>
    );
};
