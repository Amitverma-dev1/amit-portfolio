
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUpRight,
  Clock,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitSuccess(false);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError('');
    setSubmitSuccess(false);

    try {
      await emailjs.send(
        'service_jknq6bl',
        'template_j6ksdeb',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'OgG6R9JMQKiHClTb_'
      );

      setSubmitSuccess(true);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    } catch (err) {
      console.error('EmailJS Error:', err);

      setError(
        'Unable to send your message. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      title: 'Email Address',
      value: 'amitdell7070@gmail.com',
      href: 'mailto:amitdell7070@gmail.com',
      icon: Mail,
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10',
    },
    {
      title: 'Phone Number',
      value: '+91 9334650570',
      href: 'tel:+919334650570',
      icon: Phone,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
    },
    {
      title: 'Location',
      value: 'New Delhi, India',
      href: null,
      icon: MapPin,
      color: 'text-pink-400',
      bg: 'bg-pink-400/10',
    },
  ];

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-[#0b1220]/80 px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 hover:border-white/20';

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-dark-300/50 py-24"
    >
      {/* Background Effects */}
      <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-400">
            <MessageCircle size={16} />
            Let's Connect
          </div>

          <h2 className="section-title opacity-0 animate-fade-in">
            Get In Touch
          </h2>

          <p className="section-subtitle mx-auto mt-4 max-w-2xl opacity-0 animate-fade-in-delay-1">
            Have a project in mind or looking for a developer?
            Let's discuss your ideas and create something amazing together.
          </p>
        </div>

        {/* Main Contact Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-8">

          {/* LEFT SIDE */}
          <div className="relative lg:col-span-2 opacity-0 animate-fade-in-delay-1">

            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />

            <div className="relative h-full rounded-3xl border border-white/10 bg-[#111827]/90 p-7 md:p-9 shadow-2xl">

              {/* Heading */}
              <div className="mb-9">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-500/20">
                  <Mail size={27} />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  Let's Talk About Your Project
                </h3>

                <p className="text-sm leading-7 text-white/55">
                  Whether you need a business website, eCommerce
                  solution, or web application, I'm always happy
                  to discuss new opportunities and ideas.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]"
                    >
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon size={23} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="mb-1 text-xs text-white/40">
                          {item.title}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="break-all text-sm font-medium text-white/85 transition-colors hover:text-cyan-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-white/85">
                            {item.value}
                          </p>
                        )}
                      </div>

                      {item.href && (
                        <ArrowUpRight
                          size={17}
                          className="shrink-0 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mt-8 rounded-2xl border border-green-400/20 bg-green-400/[0.05] p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </span>

                  <span className="text-sm font-semibold text-green-400">
                    Open to Opportunities
                  </span>
                </div>

                <p className="text-sm leading-6 text-white/55">
                  Interested in meaningful projects, freelance
                  opportunities, and professional collaborations.
                </p>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xs text-white/40">
                  Let's build something great.
                </span>

                <Sparkles size={19} className="text-cyan-400" />
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="relative lg:col-span-3 opacity-0 animate-fade-in-delay-2">

            {/* Gradient Border Effect */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-pink-500/30 opacity-50 blur-sm" />

            <div className="relative h-full rounded-3xl border border-white/10 bg-[#111827]/95 p-6 md:p-9 shadow-2xl">

              {/* Form Heading */}
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Send Me a Message
                  </h3>

                  <p className="mt-2 text-sm text-white/45">
                    Fill out the form and I'll get back to you.
                  </p>
                </div>

                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Send size={23} />
                </div>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 flex items-start gap-3 rounded-xl border border-green-400/30 bg-green-400/10 p-4 text-sm text-green-300"
                >
                  <Sparkles size={20} className="shrink-0" />
                  <span>
                    Thank you! Your message has been sent successfully.
                    I'll get back to you soon.
                  </span>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div
                  role="alert"
                  className="mb-6 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-300"
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* Name and Email */}
                <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/70"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white/70"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={inputClass}
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Subject <span className="text-cyan-400">*</span>
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div className="mb-7">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Your Message <span className="text-cyan-400">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    minLength={10}
                    rows={6}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={19}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </>
                    )}
                  </span>
                </button>

                <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-white/35">
                  <Clock size={14} />
                  Your message will be delivered directly to my inbox.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
