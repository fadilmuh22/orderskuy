import { useState } from "react";
import {
  FaBars,
  FaBell,
  FaClipboardList,
  FaShoppingCart,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import { RestoLogo } from "../common/RestoLogo";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IconProvider } from "../common/IconProvider";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      link: "/account",
      label: "Account",
      icon: <FaUser />,
      className: "fill-emerald-500",
    },
    {
      link: "/notification",
      label: "Notification",
      icon: <FaBell />,
      className: "fill-sky-500",
    },
    {
      link: "/rewards",
      label: "Rewards",
      icon: <FaTrophy />,
      className: "fill-fuchsia-500",
    },
    {
      link: "/orders",
      label: "Orders",
      icon: <FaClipboardList />,
      className: "fill-yellow-500",
    },
    {
      link: "/cart",
      label: "Cart",
      icon: <FaShoppingCart />,
      className: "fill-orange-500",
    },
  ];

  return (
    <NextUINavbar height="3rem" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <RestoLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
          icon={
            <IconProvider size="24">
              <FaBars />
            </IconProvider>
          }
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} as={Link} to={item.link}>
            <Button
              className={"justify-start"}
              startContent={
                <IconProvider className={item.className} size="20">
                  {item.icon}
                </IconProvider>
              }
              variant="light"
              fullWidth
            >
              {item.label}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
