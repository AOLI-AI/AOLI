interface NavbarProps {
  title?: string;
}

function Navbar({ title }: NavbarProps) {
  return (
    <header className="navbar bg-base-100 shadow-sm">
      <a className="btn btn-ghost text-xl">{title}</a>
    </header>
  );
}

export default Navbar;
