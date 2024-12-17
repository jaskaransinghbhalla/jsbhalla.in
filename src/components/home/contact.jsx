import { contactData } from "../../../data/data";
import ButtonStyleOne from "../ButtonStyleOne";
import React from "react";

const ContactSection = () => {
  return (
    <div className="md:mt-6 md:mb-16">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-6 text-gray-700">
        I&apos;m always excited to collaborate on new projects or discuss
        opportunities. Feel free to reach out through any of these channels:
      </p>
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {contactData.map((method) => (
          <ButtonStyleOne key={method.label} {...method} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
