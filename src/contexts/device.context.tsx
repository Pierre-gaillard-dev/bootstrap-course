import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface DeviceContextValue {
  isMobile: boolean;
}

export const DeviceContext = createContext<DeviceContextValue>({
  isMobile: false,
});

export const DeviceProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};
