import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface NavItemProps {
  href: string;
  icon?: IconProp;
  isActive: boolean;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  children,
  isActive,
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center p-2 mb-2 rounded w-full gap-2 pl-8 border-border bg-background text-foreground ${
        isActive ? "bg-primary text-secondary" : "hover:bg-secondary"
      }`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-3" />}
      {children}
    </Link>
  );
};

export default NavItem;
