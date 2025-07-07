import Button from "../ui/button";
import Link from "next/link";

interface MenuBarButton {
  label: string;
  href: string;
}

interface MenuBarProps {
  buttons: MenuBarButton[];
}

const MenuBar = ({ buttons }: MenuBarProps) => {
  return (
    <nav className="flex flex-wrap sm:flex-row flex-col-reverse items-center justify-between sm:gap-4 gap-8 sm:px-6 py-3 sm:w-full max-w-dvh">
      <div className="flex flex-wrap sm:flex-row flex-col items-center gap-6">
        {buttons.map((button, index) => (
          <Button key={index} variant={"outline"} type="button">
            <Link href={button.href} className="text-blue-600 hover:underline">
              {button.label}
            </Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="icon" type="button">
          <Link href="/cart" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M6 6h15l-1.5 9h-13z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="20" r="1" fill="currentColor"/>
              <circle cx="18" cy="20" r="1" fill="currentColor"/>
            </svg>
          </Link>
        </Button>
      </div>
    </nav>
  );
}

export default MenuBar;
