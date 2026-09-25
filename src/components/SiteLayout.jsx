import { createContext, useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RegistrationModal from "./RegistrationModal";

const RegistrationContext = createContext(null);

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (!context) throw new Error("useRegistration must be used inside SiteLayout");
  return context;
}

export default function SiteLayout({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("student");
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openRegistration = (category = "student") => {
    setSelectedCategory(category);
    setIsRegistrationOpen(true);
  };

  return (
    <RegistrationContext.Provider value={{ openRegistration }}>
      <div className="futureaxis-page-wrapper">
        <Navbar onOpenRegister={openRegistration} />
        {children}
        <Footer />
        <RegistrationModal
          isOpen={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
          preselectedCategory={selectedCategory}
        />
      </div>
    </RegistrationContext.Provider>
  );
}
