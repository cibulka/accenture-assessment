type SlideButtonProps = {
  title: string;
  onClick: () => void;
};

export function SlideButton({ title, onClick }: SlideButtonProps) {
  return (
    <button type="button" className="relative col-span-1 bg-slate-600 rounded-md" onClick={onClick}>
      <h2
        className={[
          "absolute top-1/2 w-full",
          "transform -translate-y-1/2 rotate-90",
          "text-5xl whitespace-nowrap",
          "flex justify-center",
        ].join(" ")}
      >
        <span className="flex items-center gap-4">
          <span className="text-6xl opacity-50">+</span>
          <span>{title}</span>
        </span>
      </h2>
    </button>
  );
}
