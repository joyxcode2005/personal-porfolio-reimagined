import { createContext, useState } from "react";

interface ToggleContextType {
  isToggled: boolean;
  toggle: () => void;
}

export const ToggleContext = createContext<ToggleContextType>({
  isToggled: false,
  toggle: () => {},
});

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [isToggled, setIsToggled] = useState(false);

  // Universal toggle function
  const toggle = () => {
    setIsToggled((prev: any) => !prev);
  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
