"use client";

import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  MenuItem,
  Stack,
} from "@mui/material";
import CustomText from "./CustomText";
import Link from "next/link";
import Image from "next/image";
import CustomDialog from "./CustomDialog";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutDialog from "../Dialog-content/LogoutDialog";
import { useSelector } from "react-redux";
import { RootState } from "../../rtk/store";
import { menuItems } from "../../Constants/data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface MobileMenuDrawerProps {
  drawerOpen: boolean;
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetting: () => void;
  handleDialog: () => void;
  openDialog: boolean;
  closeDialog: () => void;
}

export default function MobileMenuDrawer({
  drawerOpen,
  toggleDrawer,
  handleSetting,
  handleDialog,
  openDialog,
  closeDialog,
}: MobileMenuDrawerProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const handleToggleMenu = (menuText: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuText]: !prev[menuText],
    }));
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: "#0A0A1A",
            color: "#fff",
            borderRadius: "0 12px 12px 0",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
          <CustomText text={user?.name || "User"} h5 />
          <IconButton onClick={() => toggleDrawer(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <List disablePadding>
          {menuItems.map((item) => {
            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
            const isOpen = openMenus[item.text] || false;

            return (
              <Box key={item.text}>
                <MenuItem
                  onClick={() => (hasChildren ? handleToggleMenu(item.text) : null)}
                  sx={{
                    borderRadius: "8px",
                    mt: 1,
                    "&:hover": { backgroundColor: "#1B1035" },
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  component={hasChildren ? "div" : Link}
                  href={hasChildren ? undefined : item.url}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <ListItemIcon sx={{ color: "#fff", minWidth: "32px" }}>
                      <Image src={item.icon} alt={item.text} width={24} height={24} />
                    </ListItemIcon>
                    {item.text}
                  </Stack>
                  {hasChildren &&
                    (isOpen ? (
                      <ExpandMoreIcon sx={{ color: "#aaa" }} />
                    ) : (
                      <ChevronRightIcon sx={{ color: "#aaa" }} />
                    ))}
                </MenuItem>

                {hasChildren && (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 4 }}>
                      {item.children.map((child) => (
                        <Link href={child.url} key={child.text}>
                          <MenuItem
                            sx={{
                              borderRadius: "8px",
                              mt: 1,
                              "&:hover": { backgroundColor: "#1B1035" },
                            }}
                          >
                            <ListItemIcon sx={{ color: "#fff", minWidth: "32px" }}>
                              <Image
                                src={child.icon}
                                alt={child.text}
                                width={20}
                                height={20}
                              />
                            </ListItemIcon>
                            {child.text}
                          </MenuItem>
                        </Link>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            );
          })}

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mt: 2 }} />

          <MenuItem
            onClick={handleSetting}
            sx={{
              borderRadius: "8px",
              mt: 1,
              "&:hover": { backgroundColor: "#1B1035" },
            }}
          >
            <ListItemIcon sx={{ color: "#fff", minWidth: "32px" }}>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>

          <MenuItem
            onClick={handleDialog}
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              mt: 1,
              "&:hover": { backgroundColor: "#1B1035" },
              mb:4
            }}
          >
            <ListItemIcon sx={{ color: "#aaa", minWidth: "32px" }}>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Log out
          </MenuItem>
        </List>
      </Drawer>

      {/* Logout Confirmation Dialog */}
      <CustomDialog
        open={openDialog}
        handleClose={closeDialog}
        content={<LogoutDialog handleClose={closeDialog} />}
      />
    </>
  );
}
