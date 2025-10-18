import { useState } from "react";
import Alert from "../components/shared/Alert";
import { Particles } from "../components/contact/particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const form = e.target.closest("form");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    showAlertMessage("success", "Your message has been sent");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-8 flex-1">
      <div className="relative flex items-center">
        <Particles
          className="absolute inset-0 -z-50"
          quantity={100}
          ease={80}
          size={4}
          color={"#06748E"}
          refresh
        />
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className="flex flex-col items-center justify-center max-w-md mx-auto px-5 py-4 bg-white border border-gray-300 rounded-2xl">
          <div className="flex flex-col text-center w-full gap-5 mb-8">
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              Contact Us
            </h2>
          </div>
          <form className="w-full">
            <div className="mb-4">
              <label className="text-lg font-medium">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full min-h-10 px-3 py-2 border border-black/10 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full min-h-10 px-3 py-2 border border-black/10 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-10 px-3 py-2 border border-black/10 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>
            <div>
              <button
                onClick={handleSend}
                className="w-full px-1 py-3 text-[18px] text-center rounded-md cursor-pointer bg-cyan-500 hover:bg-cyan-400 hover-animation" transition
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
