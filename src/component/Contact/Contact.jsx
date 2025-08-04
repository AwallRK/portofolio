"use client"

import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import emailjs from '@emailjs/browser'; // Import EmailJS

// --- SVG Icon Components ---

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
        <line x1="22" x2="11" y1="2" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1 0-1.3-.5-2.4-1.3-3.2.1-.3.5-1.5-.1-3.2 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.6 1.7-.2 2.9-.1 3.2-.8.8-1.3 1.9-1.3 3.2 0 4.7 2.7 5.8 5.5 6.1-.6.5-.9 1.2-.9 2.2v3.5" />
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

// --- NEW --- Footer Component
const Footer = () => {
    const footerStyles = `
        .footer-container {
            background-color: #0c0c1d;
            padding: 2rem 1rem;
            border-top: 1px solid #374151; // gray-700
            color: #9ca3af; // gray-400
            font-family: 'Inter', sans-serif;
        }
        .footer-content {
            max-width: 1366px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .footer-copyright {
            font-size: 0.875rem;
        }
        .footer-back-to-top {
            font-size: 0.875rem;
            color: #f97316;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        .footer-back-to-top:hover {
            color: #ea580c;
        }
    `;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <style>{footerStyles}</style>
            <footer className="footer-container">
                <div className="footer-content">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Awalludin Sairan. All Rights Reserved.
                    </p>
                    <a href="#top" onClick={scrollToTop} className="footer-back-to-top">
                        Back to Top &uarr;
                    </a>
                </div>
            </footer>
        </>
    );
};


// SCSS styles are included directly here for a self-contained component.
const styles = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.contact-container {
  min-height: 100vh;
  background: linear-gradient(to bottom, #0c0c1d, #111132);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  padding: 1rem 0;

  .contact-motion-wrapper {
    max-width: 1366px;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 0 32px;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0 16px;
      gap: 30px;
      text-align: center;
    }
  }

  .text-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 768px) {
        gap: 20px;
        align-items: center;
    }

    h1 {
      font-size: 6rem;
      font-weight: 300;
      line-height: 1;
      color: white;

      @media (max-width: 768px) {
        font-size: 3rem;
      }

      span {
        color: #f97316; // orange-500
      }
    }
    
    .info-items-container {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 16px;

      .icon-wrapper {
        width: 48px;
        height: 48px;
        background-color: #f97316;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        svg {
          width: 24px;
          height: 24px;
          color: white;
        }
      }

      .info-text {
        h3 {
          font-size: 1.25rem;
          font-weight: 500;
          color: white;
        }
        p {
          color: #9ca3af; // gray-400
        }
      }
    }
    
    .socials {
        display: flex;
        flex-direction: column;
        gap: 16px;

        h3 {
            font-size: 1.5rem;
            font-weight: 500;
            color: white;
        }

        .social-links {
            display: flex;
            gap: 16px;
            align-items: center; // Align items vertically

            a {
                width: 48px;
                height: 48px;
                background-color: #374151; // gray-700
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.3s ease;

                &:hover {
                    background-color: #f97316;
                }

                svg {
                    width: 24px;
                    height: 24px;
                    color: white;
                }
            }
        }
    }
  }

  .form-section {
    flex: 1;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 380px;
    }

    .background-glow {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom right, rgba(249, 115, 22, 0.2), rgba(147, 51, 234, 0.2));
      border-radius: 24px;
      filter: blur(24px);
    }

    form {
      position: relative;
      background-color: rgba(17, 17, 50, 0.5);
      backdrop-filter: blur(4px);
      padding: 32px;
      border-radius: 16px;
      border: 1px solid #4b5563; // gray-700
      display: flex;
      flex-direction: column;
      gap: 24px;

      h2 {
        font-size: 1.875rem;
        font-weight: 500;
        margin-bottom: 16px;
        color: white;
        text-align: center;
      }

      .form-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;

        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }
      }
      
      .form-group {
         label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 8px;
            color: #d1d5db; // gray-300
            text-align: left;
         }

         input, textarea {
            width: 100%;
            padding: 12px 16px;
            background-color: #1f2937; // gray-800
            border: 1px solid #4b5563; // gray-600
            border-radius: 8px;
            color: white;
            transition: border-color 0.3s ease;

            &:focus {
                outline: none;
                border-color: #f97316;
            }

            &::placeholder {
                color: #6b7280; // gray-500
            }
         }

         textarea {
            resize: none;
         }
      }

      .submit-button {
        width: 100%;
        padding: 16px 24px;
        background-color: #f97316;
        color: white;
        border-radius: 8px;
        font-weight: 500;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        &:hover {
            background-color: #ea580c; // orange-600
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .spinner {
            width: 24px;
            height: 24px;
            border: 2px solid white;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
      }

      .feedback-message {
        padding: 16px;
        border-radius: 8px;
        text-align: center;

        &.success {
            background-color: rgba(16, 185, 129, 0.2); // green-500/20
            border: 1px solid #10b981; // green-500
            color: #6ee7b7; // green-400
        }

        &.error {
            background-color: rgba(239, 68, 68, 0.2); // red-500/20
            border: 1px solid #ef4444; // red-500
            color: #f87171; // red-400
        }
      }
    }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`;

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

export default function Contact() {
    const ref = useRef(null);
    const formRef = useRef(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const isInView = useInView(ref, { margin: "-100px" });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        // To use EmailJS, you need to install it: npm install @emailjs/browser
        emailjs
            .sendForm(
                'YOUR_SERVICE_ID', // Get this from your EmailJS account > Email Services
                'YOUR_TEMPLATE_ID', // Get this from your EmailJS account > Email Templates
                formRef.current,
                'YOUR_PUBLIC_KEY' // Get this from your EmailJS account > Account > API Keys
            )
            .then(
                () => {
                    setSuccess(true);
                    setLoading(false);
                    if (formRef.current) {
                        formRef.current.reset();
                    }
                    // Hide success message after 3 seconds
                    setTimeout(() => setSuccess(false), 3000);
                },
                (error) => {
                    setError(true);
                    setLoading(false);
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <>
            {/* We inject the styles into the head of the document */}
            <style>{styles}</style>
            <div className="contact-container">
                <motion.div
                    ref={ref}
                    className="contact-motion-wrapper"
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                >
                    {/* Text Section */}
                    <motion.div className="text-section" variants={variants}>
                        <motion.h1 variants={variants}>
                            Let&#39;s work
                            <br />
                            <span>together.</span>
                        </motion.h1>

                        <motion.div variants={variants} className="info-items-container">
                            <div className="info-item">
                                <div className="icon-wrapper">
                                    <MailIcon />
                                </div>
                                <div className="info-text">
                                    <h3>Email</h3>
                                    <p>awalludin.jamil17@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-wrapper">
                                    <PhoneIcon />
                                </div>
                                <div className="info-text">
                                    <h3>Phone</h3>
                                    <p>+62 857 1999 4440</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-wrapper">
                                    <MapPinIcon />
                                </div>
                                <div className="info-text">
                                    <h3>Location</h3>
                                    <p>Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={variants} className="socials">
                            <h3>Follow me</h3>
                            <div className="social-links">
                                <motion.a
                                    href="https://github.com/AwallRK"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <GithubIcon />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/awalludin-sairan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <LinkedinIcon />
                                </motion.a>
                                <motion.a
                                    href="https://www.instagram.com/leixiwang/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <InstagramIcon />
                                </motion.a>
                                <motion.a
                                    href="/Awalludin-Sairan-Resume.pdf"
                                    download
                                    title="Download Resume"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <DownloadIcon />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div className="form-section" variants={variants}>
                        <motion.div
                            className="background-glow"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <motion.form
                            ref={formRef}
                            onSubmit={sendEmail}
                            variants={variants}
                        >
                            <h2>Send me a message</h2>

                            <div className="form-grid">
                                <motion.div variants={variants} className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        placeholder="John"
                                    />
                                </motion.div>
                                <motion.div variants={variants} className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        placeholder="Doe"
                                    />
                                </motion.div>
                            </div>

                            <motion.div variants={variants} className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                />
                            </motion.div>

                            <motion.div variants={variants} className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Project Collaboration"
                                />
                            </motion.div>

                            <motion.div variants={variants} className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                />
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="submit-button"
                                variants={variants}
                            >
                                {loading ? (
                                    <div className="spinner" />
                                ) : (
                                    <>
                                        <SendIcon />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="feedback-message success"
                                >
                                    Message sent successfully! I&#39;ll get back to you soon.
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="feedback-message error"
                                >
                                    Something went wrong. Please try again.
                                </motion.div>
                            )}
                        </motion.form>
                    </motion.div>
                </motion.div>
            </div>
            {/* --- NEW --- Render the Footer component */}
            <Footer />
        </>
    );
}
