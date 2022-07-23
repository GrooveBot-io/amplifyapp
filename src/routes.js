/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import AssetManagement from "views/AssetManagement.js";
import AccessManagement from "views/AccessManagement.js";
import VulnerabilityManagement from "views/VulnerabilityManagement.js";
import Acknowledgement from "views/Acknowledgement.js";
import UserPage from "views/User.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/AssetManagement",
    name: "Asset Management",
    icon: "nc-icon nc-laptop",
    component: AssetManagement,
    layout: "/admin",
  },
  {
    path: "/AccessManagement",
    name: "Access Management",
    icon: "nc-icon nc-badge",
    component: AccessManagement,
    layout: "/admin",
  },
  {
    path: "/VulnerabilityManagement",
    name: "Vulnerability Management",
    icon: "nc-icon nc-ambulance",
    component: VulnerabilityManagement,
    layout: "/admin"
  },
  {
    path: "/Acknowledgement",
    name: "Acknowledgement",
    icon: "nc-icon nc-ruler-pencil",
    component: Acknowledgement,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
];
export default routes;
