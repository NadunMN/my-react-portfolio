import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/[0.05] rounded-full blur-3xl" />

      <div className="relative z-10 text-center space-y-6 max-w-sm w-full">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-red-500">Error 404</p>
        <h1 className="font-bebas-neue text-[8rem] sm:text-[10rem] leading-none text-white/90">
          404
        </h1>
        <p className="text-lg sm:text-xl text-white/50">Page not found</p>
        <p className="text-sm text-white/30 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-6 py-3 border border-red-500/50 text-red-400 text-sm font-mono tracking-widest uppercase rounded-sm hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
