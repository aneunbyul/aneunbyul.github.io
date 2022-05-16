import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { createContext } from "react";
import Nav from './Nav'

const ScrollToTop = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);
  return null;
};

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
        <ScrollToTop />
        <Header visible={visible} setVisible={setVisible} />
        <Nav/>
        <main>{children}</main>
        <Footer />
    </div>
  );
};

export default Layout;
