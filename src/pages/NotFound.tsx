const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <a
        href="/overview"
        className="text-primary hover:underline font-semibold"
      >
        Go back to Overview
      </a>
    </div>
  )
}

export default NotFound
