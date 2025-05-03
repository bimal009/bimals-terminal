'use client';

import { useState, FormEvent, useRef } from 'react';
import { Mail, Github, Twitter, Send, Loader2, Instagram } from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success?: boolean;
        message?: string;
    }>({});

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!form.current) return;

        try {
            const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
            const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;

            if (!serviceID || !templateID || !publicKey) {
                throw new Error('EmailJS configuration is missing');
            }

            await emailjs.sendForm(
                serviceID,
                templateID,
                form.current,
                {
                    publicKey: publicKey,
                }
            );

            setSubmitStatus({
                success: true,
                message: 'Message sent successfully! I will get back to you soon.'
            });

            // Reset form
            form.current.reset();

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({});
            }, 5000);
        } catch (error: unknown) {
            console.error('Email sending failed:', error);
            setSubmitStatus({
                success: false,
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-[#252526]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-sm font-mono text-gray-400">{"// Let's build something amazing together"}</span>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Contact Me</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact info */}
                        <div className="bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg p-6">
                            <div className="flex items-center mb-6">
                                <Mail className="h-6 w-6 text-blue-400 mr-3" />
                                <h3 className="text-xl font-semibold text-white">{"const connect = () => {"}</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm mb-2 text-gray-400">{"// Reach out via email"}</p>
                                    <a
                                        href="mailto:pandeybimal616@gmail.com"
                                        className="flex items-center text-[#9cdcfe] hover:text-white transition-colors"
                                    >
                                        <Mail className="h-5 w-5 mr-2" />
                                        pandeybimal616@gmail.com
                                    </a>
                                </div>



                                <div>
                                    <p className="text-sm mb-2 text-gray-400">{"// Connect on social media"}</p>
                                    <div className="flex gap-4">
                                        <Link
                                            href="https://github.com/bimal009"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] hover:bg-[#444] transition-colors"
                                        >
                                            <Github className="h-5 w-5" />
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com/bunchoo_graphics11"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] hover:bg-[#444] transition-colors"
                                        >
                                            <Instagram className="h-5 w-5" />
                                        </Link>
                                        <Link
                                            href="https://x.com/CodeWithBun?t=2VYit3nsNRTPWs6nKqJpmw&s=09"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] hover:bg-[#444] transition-colors"
                                        >
                                            <Twitter className="h-5 w-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <span className="theme-token-comment">// Have a question or need assistance with a project? Feel free to contact me! Whether you're looking for web development, app solutions, or anything in between, I'm here to help bring your ideas to life. Let's connect!</span>

                            </div>
                            <p className="text-xl font-semibold text-white mt-4">{"}"}</p>
                        </div>

                        {/* Contact form */}
                        <div className="bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg p-6">
                            <div className="flex items-center mb-6">
                                <Send className="h-6 w-6 text-green-400 mr-3" />
                                <h3 className="text-xl font-semibold text-white">{"const sendMessage = async (data) => {"}</h3>
                            </div>

                            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm text-gray-400 mb-2">{"// Your name"}</label>
                                    <input
                                        type="text"
                                        id="user_name"
                                        name="user_name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-4 py-2 bg-[#252526] border border-[#3e3e3e] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#0e639c] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="user_email" className="block text-sm text-gray-400 mb-2">{"// Your email"}</label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full px-4 py-2 bg-[#252526] border border-[#3e3e3e] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#0e639c] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">{"// Your message"}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message here..."
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2 bg-[#252526] border border-[#3e3e3e] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#0e639c] focus:border-transparent"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center px-6 py-3 bg-[#0e639c] text-white rounded-md hover:bg-[#0d5a8a] transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin h-5 w-5 mr-2" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitStatus.message && (
                                    <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-[#043a1d] text-green-300' : 'bg-[#5a1d1d] text-red-300'}`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                            </form>
                            <p className="text-xl font-semibold text-white mt-4">{"}"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;