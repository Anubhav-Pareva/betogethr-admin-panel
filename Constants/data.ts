import { icons } from "./icons";

export const menuItems = [
  { text: "Dashboard", icon: icons.dashboard, url: "/user/dashboard" },
  { text: "Backtest", icon: icons.backtest, url: "/user/backtest" },
  { text: "Portfolio", icon: icons.portfolio, url: "/user/portfolio" },
  { text: "Market Data", icon: icons.marketData, url: "/user/market-data" },
  {
    text: "Broker Integration",
    icon: icons.borkerIntegration,
    url: "/user/broker-integration",
  },
];

export const settingMenuItems = [
  { text: "Change Password", icon: icons.changePassword, value:"change-password" },
  { text: "API Keys", icon: icons.apikey, value:"api-key" },
  { text: "Subscription Management", icon: icons.SubscriptionManagement, value:"subscription" },
];
