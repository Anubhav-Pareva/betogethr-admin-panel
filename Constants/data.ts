import { icons } from "./icons";

export const menuItems = [
  {
    text: "Dashboard",
    icon: icons.menuIcon.dashboard,
    url: "/admin/dashboard",
  },
  { text: "Users", icon: icons.menuIcon.users, url: "/admin/users" },
  {
    text: "Events",
    icon: icons.menuIcon.events,
    url: "/admin/events",
    children: [
      {
        text: "Event List",
        icon: icons.menuIcon.list,
        url: "/admin/events",
      },
      {
        text: "Admin Events",
        icon: icons.menuIcon.events,
        url: "/admin/events/admin-events",
      },
      {
        text: "Events Organisers",
        icon: icons.menuIcon.organiser,
        url: "/admin/events/event-organisers",
      },
      {
        text: "Event Request",
        icon: icons.menuIcon.request,
        url: "/admin/events/requests",
      },
    ],
  },
  {
    text: "Safe Spot",
    icon: icons.menuIcon.safeSpot,
    url: "/admin/safespot",
    children: [
      {
        text: "Safe Spot List",
        icon: icons.menuIcon.list,
        url: "/admin/safespot",
      },
      {
        text: "Safe Spot Request",
        icon: icons.menuIcon.request,
        url: "/admin/safespot/requests",
      },
    ],
  },
  { text: "Safe Meet", icon: icons.menuIcon.safeMeet, url: "/admin/safemeet" },
  {
    text: "Subscription",
    icon: icons.menuIcon.subscription,
    url: "/admin/subscription",
  },
  {
    text: "Docs Management",
    icon: icons.menuIcon.docsManagement,
    url: "/admin/docs-management",
  },
];

export const settingMenuItems = [
  {
    text: "Change Password",
    icon: icons.changePassword,
    value: "change-password",
  },
];
