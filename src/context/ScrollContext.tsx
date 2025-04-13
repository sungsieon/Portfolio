import { createContext, useRef, ReactNode, useContext } from "react";

type ScrollRefs = {
    landingRef: React.RefObject<HTMLDivElement | null>;
    introRef: React.RefObject<HTMLDivElement | null>;
    skillRef: React.RefObject<HTMLDivElement | null>;
    projectRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
  };
  

const ScrollContext = createContext<ScrollRefs | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const landingRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
  
    return (
      <ScrollContext.Provider
        value={{ landingRef, introRef, skillRef, projectRef, contactRef }}
      >
        {children}
      </ScrollContext.Provider>
    );
  };

  export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
      throw new Error("useScroll must be used within a ScrollProvider");
    }
    return context;
  };