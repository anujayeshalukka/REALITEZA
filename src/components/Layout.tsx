import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import MobileBottomNav from './MobileBottomNav';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <MobileBottomNav />
      <Footer />
    </div>
  );
};

export default Layout;
