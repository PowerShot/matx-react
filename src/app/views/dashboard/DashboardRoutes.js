import { MatxLoadable } from "matx";

const Analytics = MatxLoadable({
  loader: () => import("./Analytics")
})

const Home = MatxLoadable({
  loader: () => import("./Home")
})

const dashboardRoutes = [
  {
    path: "/explorer",
    component: Home,
  },
  {
    path: "/farmer",
    component: Analytics,
  }
];

export default dashboardRoutes;
