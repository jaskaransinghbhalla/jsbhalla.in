interface PreloaderProps {
  load?: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ load = true }) => {
  return (
    <div
      className="bg-stone-900"
      id={load ? 'preloader' : 'preloader-none'}
    />
  );
};