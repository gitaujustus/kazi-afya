'use client'

import { SendIcon } from "@/components/Icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import countriesData from '@/lib/countries.json';
import regions from '@/lib/regions.json';

const ContactForm = () => {
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting }, 
        reset 
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setSubmitError("");
            
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            // Handle success
            setSubmitSuccess(true);
            reset(); // Reset form fields
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
            
        } catch (error) {
            setSubmitError(error.message || "An error occurred. Please try again.");
        } 
    };

    return (
        <form className="mt-[60px] sm:mt-[90px] md:mt-[120px] xl:mt-[148px]" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-cosmic-void text-[24px] sm:text-[28px] xl:text-[32px] leading-[120%] font-helvetica-semibold pb-[20px] sm:pb-[30px] xl:pb-[41px]">Talk to our experts</h1>
            
            {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    <p className="font-helvetica-regular text-[14px] sm:text-[15px]">Thank you for contacting us! We&apos;ll get back to you soon.</p>
                </div>
            )}
            
            {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p className="font-helvetica-regular text-[14px] sm:text-[15px]">{submitError}</p>
                </div>
            )}
            
            <div className="flex flex-col gap-[16px] sm:gap-[18px] xl:gap-[22px] text-private-jet">
                {/* Email */}
                <div>
                    <input 
                        type="email" 
                        className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.email ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular`}
                        placeholder="Email Address*"
                        {...register("email", { 
                            required: "Email is required", 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email.message}</p>}
                </div>
                
                {/* First Name and Last Name */}
                <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[18px]">
                    <div className="w-full">
                        <input 
                            type="text" 
                            className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.firstName ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular`}
                            placeholder="First Name*"
                            {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && <p className="text-red-500 text-[12px] mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div className="w-full">
                        <input 
                            type="text" 
                            className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.lastName ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular`}
                            placeholder="Last Name*"
                            {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && <p className="text-red-500 text-[12px] mt-1">{errors.lastName.message}</p>}
                    </div>
                </div>

                {/* Phone Number */}
                <div>
                    <input 
                        type="tel" 
                        className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.phone ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular`}
                        placeholder="Phone Number*"
                        {...register("phone", { 
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9+\-\s()]{7,15}$/,
                                message: "Please enter a valid phone number"
                            },
                            minLength: {
                                value: 10,
                                message: "Phone number must be at least 7 characters long"
                            },
                            maxLength: {
                                value: 15,
                                message: "Phone number must not exceed 13 characters"
                            }

                        })}
                    />
                    {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone.message}</p>}
                </div>

                {/* Country and Region */}
                <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[18px] w-full">
                <div className="w-full relative">
                    <select 
                        className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.country ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular bg-white appearance-none`}
                        {...register("country", { required: "Country is required" })}
                    >
                       {countriesData.map((option) => (
                        <option key={option.code} value={option.code}>
                            {option.name}
                        </option>
                    ))}
                    </select>
                    <div className="absolute inset-y-0 right-5   flex items-center pointer-events-none">
                        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2.0001L16.5 0.600098L9 8.0001L1.5 0.600098L0 2.0001L9 11.0001L18 2.0001Z" fill="#879BB4"/>
                        </svg>
                    </div>
                    {errors.country && <p className="text-red-500 text-[12px] mt-1">{errors.country.message}</p>}
                </div>
                    <div className="w-full relative ">
                        <select 
                            className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px]  xl:text-[16px] rounded-[10px] border ${errors.region ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular bg-white appearance-none`}
                            {...register("region", { required: "Region is required" })}
                        >
                             {regions.map((option) => (
                        <option key={option.code} value={option.code}>
                            {option.name}
                        </option>
                    ))}
                        </select>
                        <div className="absolute inset-y-0 right-5   flex items-center pointer-events-none">
                        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2.0001L16.5 0.600098L9 8.0001L1.5 0.600098L0 2.0001L9 11.0001L18 2.0001Z" fill="#879BB4"/>
                        </svg>
                    </div>
                        {errors.region && <p className="text-red-500 text-[12px] mt-1">{errors.region.message}</p>}
                    </div>
                </div>

                {/* Health Facility Name */}
                <div className="w-full">
                    <input 
                        type="text" 
                        className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.facilityName ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular`}
                        placeholder="Health Facility Name*"
                        {...register("facilityName", { required: "Health facility name is required" })}
                    />
                    {errors.facilityName && <p className="text-red-500 text-[12px] mt-1">{errors.facilityName.message}</p>}
                </div>

                {/* Message TextArea */}
                <div>
                    <textarea 
                        className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.message ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular`}
                        placeholder="Message*" 
                        rows="6"
                        {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && <p className="text-red-500 text-[12px] mt-1">{errors.message.message}</p>}
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-start gap-[10px]">
                    <input 
                        type="checkbox" 
                        id="terms" 
                        className={`w-4 sm:w-5 h-4 sm:h-5  cursor-pointer border ${errors.agreeToTerms ? 'border-red-500' : 'border-london-rain'} mt-1`}
                        {...register("agreeToTerms", { required: "You must agree to receive communications" })}
                    />
                    <div>
                        <label 
                            htmlFor="terms" 
                            className="text-[14px] sm:text-[15px] xl:text-[16px] text-black font-helvetica-regular"
                        >
                            I agree to receive communications from KaziAfya
                        </label>
                        {errors.agreeToTerms && <p className="text-red-500 text-[12px] mt-1">{errors.agreeToTerms.message}</p>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end w-full">
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="py-[8px] sm:py-[9px] xl:py-[10px] px-[20px] sm:px-[25px] xl:px-[30px] bg-london-rain w-[120px] sm:w-[132px] text-white text-[14px] sm:text-[15px] xl:text-[16px] font-helvetica-regular rounded-[30px] flex gap-[10px] items-center justify-center disabled:bg-blue-leviathan disabled:cursor-not-allowed"
                    >
                        <span>{isSubmitting ? "Sending..." : "Send"}</span> 
                        {!isSubmitting && <SendIcon />}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;