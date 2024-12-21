// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#001F14] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-[#98FCE4] text-4xl font-redaction mb-4">404</h2>
        <p className="text-gray-300 mb-4">Page not found</p>
        <a
          href="/"
          className="text-[#98FCE4] hover:text-emerald-400 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
