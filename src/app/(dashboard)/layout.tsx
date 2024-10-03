import { SidebarLayout } from "@/components/catalyst-ui/sidebar-layout";
import NavbarComponent from "@/components/dashboard/navbar-component";
import SidebarComponent from "@/components/dashboard/sidebar-component";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  return (
    <SidebarLayout navbar={<NavbarComponent />} sidebar={<SidebarComponent />}>
      {children}
    </SidebarLayout>
  );
};

export default Layout;
