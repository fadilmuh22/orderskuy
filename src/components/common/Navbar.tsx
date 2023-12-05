import { useMemo, useState } from "react";
import {
  FaBars,
  FaBell,
  FaClipboardList,
  FaShoppingCart,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import { RestoLogo } from "./RestoLogo";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react";
import { IconProvider } from "./IconProvider";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const authMenuItems = useMemo(() => {
    const isAuth = false;
    return isAuth
      ? {
          link: "/account",
          label: "Account",
          icon: <FaUser />,
          className: "fill-emerald-500",
        }
      : {
          link: "/login",
          label: "Login",
          icon: <FaUser />,
          className: "fill-emerald-500",
        };
  }, []);

  const menuItems = useMemo(
    () => [
      authMenuItems,
      {
        link: "/notifications",
        label: "Notifications",
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
    ],
    [authMenuItems]
  );

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height="3rem"
    >
      <NavbarContent>
        <NavbarBrand>
          <RestoLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
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
          <NavbarMenuItem key={`${item}-${index}`}>
            <Button
              className={"justify-start"}
              startContent={
                <IconProvider className={item.className} size="20">
                  {item.icon}
                </IconProvider>
              }
              variant="light"
              fullWidth
              as={Link}
              href={item.link}
              onPress={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
