import favicon from "../assets/personal/favicon.png";
import clsx from "clsx";

export default function LoadingScreen({ fadeOut }: { fadeOut: boolean }) {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700",
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <img src={favicon} alt="icon" className="w-32 animate-pulse rounded-lg" />
    </div>
  );
}
