"use client"
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            };

            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (response.status === 200) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully! I\'ll get back to you soon.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error: unknown) {
            console.error('Email sending failed:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="font-mono">
            <div className="flex">
                {/* Line numbers - Hidden on smaller screens */}
                <div className="hidden sm:block text-gray-600 pr-4 text-right select-none w-8 shrink-0">
                    {Array.from({ length: 15 }, (_, i) => (
                        <div key={i} className="h-6">{i + 1}</div>
                    ))}
                </div>

                <div className="flex-1 px-2 sm:px-0">
                    <div className="h-6 text-blue-400">import React from &apos;react&apos;;</div>
                    <div className="h-6 text-blue-400">import emailjs from &apos;@emailjs/browser&apos;;</div>
                    <div className="h-6"></div>
                    <div className="h-6 text-yellow-400">function <span className="text-green-400">Contact</span>() {"{"}</div>
                    <div className="h-6 pl-4">
                        <span className="text-purple-400">return</span> (
                    </div>
                    <div className="h-6 pl-8 text-gray-400">{"<div>"}</div>

                    {/* Contact Form - Improved for mobile and tablet */}
                    <div className="h-6 pl-4 sm:pl-12 text-gray-400">{"<form>"}</div>
                    <div className="min-h-6 h-auto pl-6 sm:pl-16 mb-2 flex flex-col sm:flex-row sm:items-center">
                        <span className="text-blue-400 mb-1 sm:mb-0 sm:mr-2">Name: </span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-gray-800 text-white px-2 py-1 rounded w-full sm:w-auto"
                            required
                        />
                    </div>
                    <div className="min-h-6 h-auto pl-6 sm:pl-16 mb-2 flex flex-col sm:flex-row sm:items-center">
                        <span className="text-blue-400 mb-1 sm:mb-0 sm:mr-2">Email: </span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-800 text-white px-2 py-1 rounded w-full sm:w-auto"
                            required
                        />
                    </div>
                    <div className="min-h-6 h-auto pl-6 sm:pl-16 mb-2 flex flex-col">
                        <span className="text-blue-400 mb-1">Message: </span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-gray-800 text-white px-2 py-1 rounded w-full"
                            rows={3}
                            required
                        />
                    </div>
                    <div className="min-h-6 h-auto pl-6 sm:pl-16 mb-2">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                    {submitStatus.type && (
                        <div className={`h-6 pl-16 ${submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                            }`}>
                            <span>{submitStatus.message}</span>
                        </div>
                    )}
                    <div className="h-6 pl-4 sm:pl-12 text-gray-400">{"</form>"}</div>

                    <div className="h-6 pl-8 text-gray-400">{"</div>"}</div>
                    <div className="h-6 pl-4">);</div>
                    <div className="h-6">{"}"}</div>
                    <div className="h-6"></div>
                    <div className="h-6 text-yellow-400">export default Contact;</div>
                </div>
            </div>
        </div>
    )
}