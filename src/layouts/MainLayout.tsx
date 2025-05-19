import { cloneElement } from "react";
import { useLocation, useOutlet } from "react-router-dom";
const Outlet = () => {
  const location = useLocation();
  const element = useOutlet();

  return <>{element && cloneElement(element, { key: location.pathname })}</>;
};

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <>{children || <Outlet />}</>;
}
