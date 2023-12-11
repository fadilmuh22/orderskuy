import { useMemo, useRef, useState } from "react";
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
  Chip,
} from "@nextui-org/react";
import { IconProvider } from "./IconProvider";
import { useAuth } from "@/api/auth";
import { useTableNumber } from "@/providers/TableNumberProvider";

export const Navbar = () => {
  const navbarMenuPortalRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: auth, isLoading } = useAuth();
  const { tableNumber } = useTableNumber();

  const authMenuItems = useMemo(() => {
    if (isLoading) {
      return {};
    }
    return auth?.isAuthenticated
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
  }, [auth?.isAuthenticated, isLoading]);

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
        {tableNumber !== 0 && (
          <Chip className="text-sm text-zinc-500">Table {tableNumber}</Chip>
        )}
        <NavbarMenuToggle
          icon={
            <IconProvider size="24">
              <FaBars />
            </IconProvider>
          }
        />
      </NavbarContent>

      <div id="navbarMenuPortal" ref={navbarMenuPortalRef}></div>

      <NavbarMenu
        className="bg-white"
        portalContainer={navbarMenuPortalRef.current ?? undefined}
      >
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
