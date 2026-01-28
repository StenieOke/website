import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const honeypot = e.target.company.value;
    if (honeypot) return;

    const formData = new FormData();
    formData.append("entry.10908947", e.target.name.value);
    formData.append("entry.1981726586", e.target.email.value);
    formData.append("entry.2139596660", e.target.service.value);
    formData.append("entry.846467524", e.target.message.value);

    await fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLScZnJfyZwZWgpvIQi5-ieIZ-1YV6PUDcbZPMZE0k_VJzqlgsw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <h3>Thank you!</h3>
        <p>I’ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contact</h3>

      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
    <input
  type="text"
  name="company"
  tabIndex="-1"
  autoComplete="off"
  style={{ display: "none" }}
/>

      <select name="service" required>
        <option value="">Select a service</option>
        <option>Buying</option>
        <option>Selling</option>
        <option>Investing</option>
        <option>Relocation</option>
      </select>

      <textarea name="message" placeholder="Message" rows="4" />

      <button type="submit">Submit</button>
    </form>
  );
}
