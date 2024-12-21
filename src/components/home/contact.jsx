import { contactData } from "../../../data/data";
import ButtonStyleOne from "../ButtonStyleOne";
import React from "react";

const ContactSection = () => {
  return (
    <div className="w-screen h-screen border">
      <div className="text-3xl font-bold mb-6">Contact</div>
      {/* One Liner */}
      <p className="mb-6 text-gray-700">
        I&apos;m always excited to collaborate on new projects or discuss
        opportunities. Feel free to reach out through any of these channels:
      </p>
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {contactData.map((method) => (
          <ButtonStyleOne key={method.label} {...method} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
