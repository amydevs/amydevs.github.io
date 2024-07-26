function FourOhFourPage() {
  return (
    <main
      className="auto-limit-w min-h-[calc(100vh-5rem)] flex items-center
        justify-center"
    >
      <div className="text-center">
        <h1 className="text-[5.25em] leading-none font-extrabold text-primary">
          404
        </h1>
        <h2 className="text-3xl pb-3">FourOhFour!</h2>
        <h2 className="text-sm">Page Could Not Be Found</h2>
      </div>
    </main>
  );
}

export default FourOhFourPage;
