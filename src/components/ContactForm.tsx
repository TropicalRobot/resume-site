'use client'

import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/sendEmail'
import FormInput from '@/components/form/FormInput'
import FormTextarea from '@/components/form/FormTextarea'
import clsx from 'clsx'
import ReCAPTCHA from 'react-google-recaptcha'
import ScrollToLink from '@/components/ScrollToLink'

const RECAPTCHA_SITE_KEY = '6Lc8CT4rAAAAALu65YFRdiigTosL4xWWIU_cG7Qc'

export type ContactFormData = {
    name: string
    org?: string
    email: string
    message: string
    token: string
}

const ContactForm: React.FC = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<ContactFormData>()

    const [serverResponse, setServerResponse] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: ContactFormData) => {
        // Trigger invisible reCAPTCHA
        const captchaToken = await recaptchaRef.current?.executeAsync()
        if (!captchaToken) return

        setLoading(true)
        setServerResponse(null)

        try {
            const result = await sendEmail({ ...data, token: captchaToken })
            setServerResponse(result.message)
        } catch (error: unknown) {
            if (error instanceof Error) {
                setServerResponse(error.message)
            } else {
                setServerResponse('An unexpected error occurred.')
            }
        } finally {
            setLoading(false)
        }
        recaptchaRef.current?.reset()
    }

    return (
        <>
            {serverResponse === 'success' ? (
                <div
                    role='alert'
                    className='bg-teal bg-opacity-20 px-8 py-6 border-teal border-2 rounded-lg '>
                    <p className='text-3xl pb-3 border-b border-teal mb-4'>
                        Thanks for reaching out!
                    </p>
                    <p className='text-lg'>
                        I&apos;ve received your message and will get back to you as soon as I can.
                        In the meantime, feel free to check out{' '}
                        <ScrollToLink
                            type='link'
                            className=''
                            label='my latest projects'
                            target='work'
                        />{' '}
                        or connect with me on{' '}
                        <a
                            href='https://www.linkedin.com/in/ryan-griffiths-04649075/'
                            target='_blank'>
                            LinkedIn
                        </a>
                        .{' '}
                    </p>
                </div>
            ) : (
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    {serverResponse !== null && (
                        <div
                            role='alert'
                            className='bg-red bg-opacity-20 px-8 py-6 border-red border rounded-lg mb-6'>
                            <p>
                                An error occurred - unfortunately the form did not send. <br />
                                Please try submitting it again.
                            </p>
                        </div>
                    )}
                    <FormInput
                        id='name'
                        type='text'
                        label='Full Name'
                        placeholder='Full Name'
                        validation={{ required: true }}
                        register={register}
                        errors={errors}
                    />

                    <FormInput
                        id='org'
                        type='text'
                        label='Company/Organisation'
                        placeholder=''
                        validation={{ required: true }}
                        register={register}
                        errors={errors}
                    />

                    <FormInput
                        id='email'
                        type='email'
                        label='Email Address'
                        placeholder='example@domain.com'
                        validation={{
                            required: true,
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email pattern
                            }
                        }}
                        register={register}
                        errors={errors}
                    />

                    <FormTextarea
                        id='message'
                        label='Message'
                        placeholder=''
                        validation={{ required: true }}
                        register={register}
                        errors={errors}
                    />

                    <div className='flex justify-between items-start'>
                        <div className='hidden'>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={RECAPTCHA_SITE_KEY}
                                size='invisible'
                                badge='inline'
                            />
                        </div>
                        <p className='text-xs lg:text-sm'>
                            This site is protected by reCAPTCHA and the Google{' '}
                            <a href='https://policies.google.com/privacy' target='_blank'>
                                Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a href='https://policies.google.com/terms' target='_blank'>
                                Terms of Service
                            </a>{' '}
                            apply.
                        </p>
                        <button
                            className={clsx(
                                loading && 'text-teal',
                                'hover:bg-teal hover:bg-opacity-20 focus:bg-teal focus:bg-opacity-20 rounded-full py-3 px-8 text-base font-semibold outline-none border-2 border-teal ml-2 transition-all duration-200 ease-in-out'
                            )}>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}

export default ContactForm
