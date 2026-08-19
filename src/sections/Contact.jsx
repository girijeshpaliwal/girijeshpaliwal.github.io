import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { assetPath } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Girijesh Paliwal",
          from_email: formData.email,
          to_email: "girjeshpaliwal880@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      // Fallback to mailto link if EmailJS credentials are not configured
      window.location.href = `mailto:girjeshpaliwal880@gmail.com?subject=${encodeURIComponent(
        `Portfolio inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      showAlertMessage("success", "Opening your email client to send the message...");
    }
  };

  return (
    <section id="contact" className="relative flex flex-col items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="flex flex-col gap-6 p-6 border border-white/10 rounded-2xl bg-primary/80 backdrop-blur-md">
          <div>
            <h2 className="text-heading mb-2">Let's Connect</h2>
            <p className="font-normal text-neutral-400">
              Whether you're looking to build a high-performance mobile app, scale backend APIs, or integrate real-time systems, feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:girjeshpaliwal880@gmail.com"
              className="flex items-center gap-3 p-3 transition border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover-animation"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-lavender/20 text-lavender">
                ✉️
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-neutral-400">Email</span>
                <span className="text-sm font-medium text-white">girjeshpaliwal880@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+919024652541"
              className="flex items-center gap-3 p-3 transition border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover-animation"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-mint/20 text-mint">
                📞
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-neutral-400">Phone & WhatsApp</span>
                <span className="text-sm font-medium text-white">+91 90246 52541</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/girijesh-paliwal-05454b190/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 transition border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover-animation"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-aqua/20 text-aqua">
                <img src={assetPath("assets/socials/linkedIn.svg")} alt="LinkedIn" className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-neutral-400">LinkedIn</span>
                <span className="text-sm font-medium text-white">Girijesh Paliwal</span>
              </div>
            </a>

            <a
              href="https://github.com/GirijeshDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 transition border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover-animation"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white">
                <img src={assetPath("assets/socials/github.svg")} alt="GitHub" className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-neutral-400">GitHub</span>
                <span className="text-sm font-medium text-white">GirijeshDev</span>
              </div>
            </a>
          </div>

          <div className="pt-2 border-t border-white/10">
            <span className="text-xs text-neutral-500">Location: Udaipur, Rajasthan, India</span>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-primary/80 backdrop-blur-md">
          <div className="flex flex-col items-start w-full gap-2 mb-6">
            <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            <p className="text-sm font-normal text-neutral-400">
              Share details about your mobile project, goals, or timeline.
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="field-label">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="Your Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="field-label">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="name@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="field-label">
                Project Requirement
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Tell me about your app idea, platform requirements, or project goals..."
                autoComplete="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 text-base font-semibold text-center text-white transition rounded-xl cursor-pointer bg-radial from-lavender to-royal hover:brightness-110 hover-animation"
            >
              {!isLoading ? "Send Message →" : "Sending..."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
