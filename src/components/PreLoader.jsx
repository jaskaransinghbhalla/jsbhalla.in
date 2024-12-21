export const Preloader = ({ load }) => {
  return <div className="bg-stone-900" id={load ? "preloader" : "preloader-none"}></div>;
};
