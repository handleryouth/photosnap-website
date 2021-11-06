import { Footer, Navbar } from ".";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
