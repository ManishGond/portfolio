import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "danger">("success");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (type: "success" | "danger", message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email to developer (you)
      await emailjs.send(
        "service_qfheank",
        "template_7zd7h8o",
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "mxnsmusic@gmail.com",
          message: formData.message,
        },
        "nd0IWC2L_9qObBOtR"
      );

      // Send confirmation email to sender
      await emailjs.send(
        "service_qfheank",
        "template_2wlu9yn", // your new template ID
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        "nd0IWC2L_9qObBOtR"
      );

      setFormData({ name: "", email: "", message: "" });
      showAlertMessage(
        "success",
        "Thanks for reaching out! Your message has been delivered, and a confirmation email has been sent to you 📩."
      );
    } catch (error) {
      console.error(error);
      showAlertMessage(
        "danger",
        "Oops! Something went wrong while sending your message. Please try again later 😞."
      );
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles className="absolute inset-0 z-0" quantity={100} ease={80} color={"#fff"} refresh />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your
            existing platform, or bring a unique project to life, I'm here to
            help.
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              value={formData.name}
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              autoComplete="name"
              required
              className="field-input field-input-focus"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@email.com"
              autoComplete="email"
              required
              className="field-input field-input-focus"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              rows={4}
              name="message"
              id="message"
              placeholder="Your message"
              autoComplete="off"
              required
              className="field-input field-input-focus"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animations ${isLoading ? "opacity-70 animate-pulse" : ""
              }`}
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
