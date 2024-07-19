"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className="bg-transparent " onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className=" flex justify-start">
          <Image  src="/Janna.svg" height={100} width={100} alt="pic"></Image>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link className="underline text-white text-sm" color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" text-white text-sm"  color="foreground" href="#">
          ABOUT ME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" text-white text-sm"  color="foreground" href="#">
          PROJECTS
          </Link>
        </NavbarItem>
      
        <NavbarItem>
          <Link className=" text-white text-sm"  color="foreground" href="#">
          SERVICES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" text-white text-sm"  color="foreground" href="#">
          CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem className="hidden lg:flex">
          <Button className=" bg-blue-700 text-white rounded-full" as={Link} href="#" variant="flat">
            LET'S TALK
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
