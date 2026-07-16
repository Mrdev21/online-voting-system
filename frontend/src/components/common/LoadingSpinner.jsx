function LoadingSpinner() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">

      <div className="h-14 w-14 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

    </div>
  );
}

export default LoadingSpinner;