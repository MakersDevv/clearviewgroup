import NavBar from "./navigationBar";
import Footer from "./footer";
import layoutStyles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className={layoutStyles.main}>{children}</main>
      <Footer />
    </div>
  );
}
