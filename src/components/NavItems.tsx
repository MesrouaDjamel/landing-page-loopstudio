import Link from "next/link";

const navItems = [
  {
    id: 1,
    label: "About",
    href: "/about",
  },
  {
    id: 2,
    label: "Careers",
    href: "/careers",
  },
  {
    id: 3,
    label: "Events",
    href: "/events",
  },
  {
    id: 4,
    label: "Product",
    href: "/product",
  },
  {
    id: 5,
    label: "Support",
    href: "/support",
  },
];
const NavItems = ({className}:{className:string}) => {
  return (
    <ul className={className}>
        {navItems.map((link)=>(
            <Link href={link.href} key={link.id}>
                <li className="hover:underline transition-all ease-in-out duration-300 cursor-pointer">{link.label}</li>
            </Link>
        ))}
    </ul>
  )
}

export default NavItems