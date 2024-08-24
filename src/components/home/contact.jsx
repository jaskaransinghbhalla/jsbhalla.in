import React from "react";
import { contactData } from "../../../data/data";

const ContactButton = ({ icon: Icon, label, href }) => (
  <a
    href={href}
    className="flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  >
    <Icon className="w-5 h-5 text-gray-600" />
    <span className="text-gray-800 font-medium">{label}</span>
  </a>
);

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
          <ContactButton key={method.label} {...method} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
