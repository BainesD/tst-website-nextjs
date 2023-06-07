import Footer from "./Footer";
import Navbar from "./Navbar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "black", height: "100vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
