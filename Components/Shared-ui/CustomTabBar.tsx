"use client";

import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { colors } from "@/Constants/colors";

interface TabBarProps {
  tabs: string[];
  onChange?: (selected: string) => void;
}

export default function CustomTabBar({ tabs, onChange }: TabBarProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <Stack direction="row" spacing={2}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <Button
            key={tab}
            onClick={() => handleClick(tab)}
            sx={{
              textTransform: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              borderRadius: "100px",
              px: 3,
              py: 1.2,
              minWidth: "auto",
              background: isActive
              ? "linear-gradient(180deg, #01DF43 0%, #01D5AD 100%)"
              : colors.voilet900,
              color: isActive ? colors.gray400 : colors.white,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: isActive ? "#00E58F" : "#111",
              },
            }}
          >
            {tab}
          </Button>
        );
      })}
    </Stack>
  );
}
