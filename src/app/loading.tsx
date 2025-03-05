export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800">Loading AQUA</h2>
        <p className="text-gray-500 mt-2">Please wait while we prepare your experience...</p>
      </div>
    </div>
  );
} 