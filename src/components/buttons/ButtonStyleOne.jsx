export default function ButtonStyleOne({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      className="flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <Icon className="w-5 h-5 text-gray-600" />
      <span className="text-gray-800 font-medium">{label}</span>
    </a>
  );
}
