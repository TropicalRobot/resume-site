import React from 'react'
import clsx from 'clsx'
import type { FormInputProps } from '@/types'

const FormInput: React.FC<FormInputProps> = ({
    id,
    label,
    placeholder,
    validation,
    register,
    errors
}) => {
    return (
        <div className='mb-5'>
            <label htmlFor={id} className='mb-3 block text-base font-medium text-black'>
                {label}
                {validation?.required == true && <span className='text-red font-sans ml-1'>*</span>}
            </label>
            <textarea
                id={id}
                rows='8'
                placeholder={placeholder}
                className={clsx(
                    'w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:shadow-md',
                    errors[id] && 'border-red',
                    !errors[id] && 'focus:border-black'
                )}
                {...register(id, validation)}
                aria-invalid={errors[id] ? 'true' : 'false'}
            />
            {errors[id]?.type == 'required' && (
                <small className='text-red' role='alert'>
                    {label} is required
                </small>
            )}

            {errors[id] && errors[id]?.type != 'required' && (
                <small className='text-red' role='alert'>
                    {errors[id]?.message ? errors[id].message : <>Invalid {label}</>}
                </small>
            )}
        </div>
    )
}

export default FormInput
