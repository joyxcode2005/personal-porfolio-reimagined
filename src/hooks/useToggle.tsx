import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";

// Custom hook to use the toggle functionality
export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
