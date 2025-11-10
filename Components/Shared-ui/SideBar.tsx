"use client";

import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "../../Constants/icons";
import { menuItems } from "../../Constants/data";

const SidebarContainer = styled(Box)(() => ({
  width: "220px",
  flex: "0 0 auto",
  display: "flex",
  color: "#FFFFFF",
  flexDirection: "column",
  gap: "1.25rem",
}));

const StyledListItem = styled(ListItemButton)(({  }) => ({
  borderRadius: "12px",
  padding: "10px 16px",
  color: "#bdbdfd",
  gap: "12px",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  "&.Mui-selected": {
    backgroundColor: "#0F101D",
    color: "#fff",
    "& .MuiListItemIcon-root": {
      color: "#fff",
    },
  },
}));

export default function Sidebar() {
  const [selected, setSelected] = useState("Dashboard");
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (text) => {
    setOpenMenus((prev) => ({
      ...prev,
      [text]: !prev[text],
    }));
  };

  return (
    <SidebarContainer sx={{ display: { xs: "none", md: "flex" } }}>
      <Stack sx={{ alignItems: "flex-start", paddingTop: 2 }}>
        <Image src={icons.logo} alt="Logo" width={50} height={50} />
      </Stack>

      <List
        sx={{
          flex: 1,
          padding: 0,
          gap: ".25rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {menuItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openMenus[item.text] || false;

          return (
            <Box key={item.text}>
              <StyledListItem
                selected={selected === item.text}
                onClick={() => {
                  if (hasChildren) handleToggle(item.text);
                  else setSelected(item.text);
                }}
              >
                <Image src={item.icon} alt={item.text} width={24} height={24} />
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                />
                {hasChildren &&
                  (isOpen ? (
                    <Image src={icons.chevronUP} alt="up chevron" width={20} height={20}/>
                  ) : (
                    <Image src={icons.chevronDown} alt="up chevron" width={20} height={20}/>
                  ))}
              </StyledListItem>

              {hasChildren && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <Link href={child.url} key={child.text}>
                        <StyledListItem
                          sx={{ pl: 6, py: 1 }}
                          selected={selected === child.text}
                          onClick={() => setSelected(child.text)}
                        >
                          <Image
                            src={child.icon}
                            alt={child.text}
                            width={20}
                            height={20}
                          />
                          <ListItemText
                            primary={child.text}
                            primaryTypographyProps={{
                              fontSize: 13,
                              fontWeight: 400,
                            }}
                          />
                        </StyledListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </SidebarContainer>
  );
}
