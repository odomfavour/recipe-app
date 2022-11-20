import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Alert, { AlertState } from '../components/Alert'

const schema = yup
    .object({
        name: yup.string().required('Please provide a name'),
        email: yup.string().email().required('Please provide a correct email'),
        subject: yup.string(),
        description: yup.string().required('Please leave a message'),
    })
    .required()

export const ContactUs = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            description: '',
        },
        resolver: yupResolver(schema),
    })

    const [showAlert, setShowAlert] = useState({
        displayAlert: false,
        isSuccessful: false,
    })

    const onSubmit = data => {
        // temp while it is yet to be connected to the backend
        console.log('contact values, after no errors', data)
        alert(JSON.stringify(data))
        reset()
        setShowAlert({ ...showAlert, displayAlert: true, isSuccessful: true })
    }

    return (
        <div className="container mx-auto">
            {showAlert.displayAlert === true && (
                <div className="flex justify-end mt-5">
                    <Alert
                        state={
                            showAlert.isSuccessful === true
                                ? AlertState.Success
                                : AlertState.Error
                        }
                        textToDisplay={
                            showAlert.isSuccessful === true
                                ? 'Your request has been succesfully submitted'
                                : 'Request submission unsuccessful. Try again'
                        }
                    />
                </div>
            )}

            <div className="container mx-auto mt-12 p-5 lg:w-2/4 md:w-3/4 sm:w-4/5">
                <h5 className="pb-2">We&apos;d love to hear from you</h5>
                <h2 className="pb-8 font-medium text-3xl">Submit a request</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                    className="flex flex-col"
                >
                    <label htmlFor="name" className="mb-1">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        aria-label="Name"
                        placeholder="Name"
                        {...register('name')}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        className={`border border-gray-400 rounded-md px-2 py-3 mb-4 ${
                            errors.name
                                ? 'border border-onerror outline-onerror'
                                : 'border  focus:outline-brand'
                        } disabled:bg-disabled`}
                    />
                    <span className="-mt-3 mb-3 text-onerror">
                        {errors.name?.message}
                    </span>

                    <label htmlFor="email" className="mb-1">
                        Email address
                    </label>
                    <input
                        name="email"
                        type="email"
                        aria-label="Email"
                        placeholder="Email address"
                        {...register('email')}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        className={`border border-gray-400 rounded-md px-2 py-3 mb-4 ${
                            errors.name
                                ? 'border border-onerror outline-onerror'
                                : 'border  focus:outline-brand'
                        } disabled:bg-disabled`}
                    />
                    <span className="-mt-3 mb-3 text-onerror">
                        {errors.email?.message}
                    </span>

                    <label htmlFor="subject" className="mb-1">
                        Subject
                    </label>
                    <input
                        name="subject"
                        type="text"
                        aria-label="Subject"
                        placeholder="Subject"
                        {...register('subject')}
                        className={`border border-gray-400 rounded-md px-2 py-3 mb-4 ${
                            errors.name
                                ? 'border border-onerror outline-onerror'
                                : 'border  focus:outline-brand'
                        } disabled:bg-disabled`}
                    />
                    <label htmlFor="description" className="mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        type="text"
                        aria-label="Description"
                        placeholder="Please enter the details of your request. A member of our support team will respond as quick as possible."
                        {...register('description')}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        rows={10}
                        className={`border border-gray-400 rounded-md px-2 py-3 mb-4 ${
                            errors.name
                                ? 'border border-onerror outline-onerror'
                                : 'border  focus:outline-brand'
                        } disabled:bg-disabled`}
                    />
                    <span className="-mt-3 mb-3 text-onerror">
                        {errors.description?.message}
                    </span>

                    <button
                        type="submit"
                        className="py-3 px-6 w-fit my-8 rounded-md bg-brand hover:bg-hover active:bg-onclick cursor-pointer font-bold text-center text-white text-base border"
                    >
                        Submit Request
                    </button>
                </form>
                <h5 className="my-4">
                    You can also get in touch by emailing us{' '}
                    <span className="text-brand">support@kitchendiary.com</span>
                </h5>
            </div>
        </div>
    )
}
