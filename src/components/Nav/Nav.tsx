import { Button } from "../Button/Button";
import { NavLogo } from "./NavLogo";

export function Nav() {
  return (
    <nav className="w-full h-20 bg-gray-50 border-b border-gray-200">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
        <NavLogo />

        <Button variant="primary">
          Escrever agora
        </Button>
      </div>
    </nav>
  )
}