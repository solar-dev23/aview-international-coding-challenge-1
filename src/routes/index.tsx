import { ReactNode } from "react";
import Home from "../pages/Home";

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: ReactNode;
}

export const routes: Route[] = [
  {
    key: "home",
    title: "Home",
    path: "/",
    enabled: true,
    component: <Home />,
  },
];
