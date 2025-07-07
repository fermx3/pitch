const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Authentication Error</h1>
      <p className="text-lg text-gray-600">
        An error occurred during authentication. Please try again.
      </p>
    </div>
  );
}

export default ErrorPage;
