import { FooterComponent } from './footer';
import { HeadComponent } from './head';
import styles from '../styles/Home.module.css';
import { NavBar } from './navbar';

function Layout({ children }) {
  return (
    <>
      <HeadComponent />
      <NavBar />
      <div className={styles.main}>{children}</div>
      <FooterComponent />
    </>
  );
}

export default Layout;
