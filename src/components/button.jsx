export default function Button({ href, children }) {
  return (
    <button className="bg-white-700 hover:bg-stone-200 p-2 border border-stone-400 rounded-md shadow-sm">
      <a href={href}>{children}</a>{" "}
    </button>
  );
}
