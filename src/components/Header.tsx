export function Header() {
  return (
    <header>
      {/* Logo */}
      <a className="group" href="/">
      </a>
      {/* Hero copy */}
      <div className="hidden md:block pt-8 w-9/10 mx-auto">
        <h1 className="text-4xl font-bold text-gray-200 text-shadow-gray-700 text-shadow-sm">The Don's Stash</h1>
        <p className="text-gray-200 text-xl text-shadow-gray-700 text-shadow-xs">
          The hidden stash of the Don's most cherished products.
        </p>
      </div>

      <div className="md:hidden block pt-8 text-center w-9/10 mx-auto">
        <h1 className="text-4xl font-bold text-gray-200 text-shadow-gray-700 text-shadow-sm">The Don's Stash</h1>
        <p className="text-gray-200 text-xl text-shadow-gray-700 text-shadow-xs">
          The hidden stash of the Don's most cherished products.
        </p>
      </div>
    </header>
  );
}
