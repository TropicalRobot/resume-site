"use client";

import { createContext, useState, useContext, FC, useEffect } from "react";

type MobileMenuContextType = {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
};

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined
);

export const MobileMenuProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ showMobileMenu, setShowMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenuContext = () => {
  const context = useContext(MobileMenuContext);
  if (context === undefined) {
    throw new Error(
      "useMobileMenuContext must be used within a MobileMenuProvider"
    );
  }
  return context;
};

export const useMobileMenuToggle = (
  forceDirection?: (dir: "up" | "down") => void
) => {
  const { showMobileMenu, setShowMobileMenu } = useMobileMenuContext();

  const toggleMobileMenu = () => {
    const newState = !showMobileMenu;
    setShowMobileMenu(newState);
    forceDirection?.("up");
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("overflow-hidden", "h-screen");
    } else {
      document.body.classList.remove("overflow-hidden", "h-screen");
    }
  }, [showMobileMenu]);

  return toggleMobileMenu;
};
