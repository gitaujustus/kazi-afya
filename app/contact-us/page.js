'use client'
import { Locations, SendIcon } from "@/components/Icons";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Contacts = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset 
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);
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
        } finally {
            setIsSubmitting(false);
        }
    };

    return ( 
    <main className="flex flex-col md:flex-row">
        {/* image */}
        <div className="bg-blue-leviathan w-full h-[30vh] md:h-auto md:w-1/3 lg:w-full hidden lg:block">
            {/* overlay */}
            <Image 
                src="/assets/hero-image.jpg" 
                width={1000} 
                height={5200} 
                alt="contacts" 
                className="object-cover opacity-40 w-full h-full"
            />
        </div>

        {/* locations */}
        <div className="pt-[80px] pb-[65px] sm:pt-[100px] md:pt-[150px] xl:pt-[207px] px-[20px] sm:px-[30px] md:px-[42px] xl:px-[56px] gap-[10px] w-full md:min-w-[37vw] bg-wizard-white">
            <h1 className="text-[48px] sm:text-[60px] md:text-[72px] xl:text-[96px] leading-[120%] font-helvetica-bold text-london-rain">Our locations</h1>
            <div className="flex flex-col gap-[11px] pb-[30px] sm:pb-[40px] md:pb-[50px] xl:pb-[67px] pt-[40px] sm:pt-[60px] md:pt-[75px] xl:pt-[91px]">
                <p className="flex items-center gap-[5px]">
                    <span><Locations/></span> 
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-helvetica-semibold text-cosmic-void">Kenya</span>
                </p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">39 Woodvale Grove, Westlands - Nairobi</p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Jimkan House</p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Nairobi, Kenya</p>
            </div>

            <div className="flex flex-col gap-[11px]">
                <p className="flex items-center gap-[5px]">
                    <span><Locations/></span> 
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-helvetica-semibold text-cosmic-void">UK</span>
                </p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Manchester Science Park, Manchester</p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Pencroft Way</p>
                <p className="font-helvetica-regular text-[16px] sm:text-[18px] xl:text-[20px] text-blue-leviathan">Manchester M15 6GZ, UK</p>
            </div>
        </div>
        
        {/* form */}
        <div className="py-[20px] sm:py-[30px] md:py-[35px] xl:py-[41px] px-[20px] sm:px-[40px] md:px-[40px] xl:px-[78px] gap-[10px] w-full md:min-w-[47vw]">
            <form className="mt-[60px] sm:mt-[90px] md:mt-[120px] xl:mt-[148px]" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-cosmic-void text-[24px] sm:text-[28px] xl:text-[32px] leading-[120%] font-helvetica-semibold pb-[20px] sm:pb-[30px] xl:pb-[41px]">Talk to our experts</h1>
                
                {submitSuccess && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        <p className="font-helvetica-regular text-[14px] sm:text-[15px]">Thank you for contacting us! We'll get back to you soon.</p>
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
                                }
                            })}
                        />
                        {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Country and Region */}
                    <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[18px] w-full">
                        <div className="w-full">
                            <select 
                                className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.country ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular bg-white`}
                                {...register("country", { required: "Country is required" })}
                            >
                                <option value="" disabled>Country*</option>
                                <option value="us">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ke">Kenya</option>
                            </select>
                            {errors.country && <p className="text-red-500 text-[12px] mt-1">{errors.country.message}</p>}
                        </div>
                        <div className="w-full">
                            <select 
                                className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.region ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular bg-white`}
                                {...register("region", { required: "Region is required" })}
                            >
                                <option value="" disabled>Region*</option>
                                <option value="ny">New York</option>
                                <option value="ldn">London</option>
                                <option value="nai">Nairobi</option>
                            </select>
                            {errors.region && <p className="text-red-500 text-[12px] mt-1">{errors.region.message}</p>}
                        </div>
                    </div>

                    {/* Health Facility Name */}
                    <div className="w-full">
                        <select 
                            className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] rounded-[10px] border ${errors.facilityName ? 'border-red-500' : 'border-private-jet'} font-helvetica-regular bg-white`}
                            {...register("facilityName", { required: "Facility name is required" })}
                        >
                            <option value="" disabled>Health Facility Name*</option>
                            <option value="f1">Facility 1</option>
                            <option value="f2">Facility 2</option>
                            <option value="f3">Facility 3</option>
                        </select>
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
                            className={`w-4 sm:w-5 h-4 sm:h-5 cursor-pointer border ${errors.agreeToTerms ? 'border-red-500' : 'border-london-rain'} mt-1`}
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
                            className="py-[8px] sm:py-[9px] xl:py-[10px] px-[20px] sm:px-[25px] xl:px-[30px] bg-london-rain w-[120px] sm:w-[132px] text-white text-[14px] sm:text-[15px] xl:text-[16px] font-helvetica-regular rounded-[30px] flex gap-[10px] items-center justify-center"
                        >
                            <span>{isSubmitting ? "Sending..." : "Send"}</span> 
                            {!isSubmitting && <SendIcon />}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </main> 
);
}
 
export default Contacts;