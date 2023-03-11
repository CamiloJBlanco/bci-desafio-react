import { Footer } from '@/components/footer';
import { HeadComponent } from '@/components/head';
import { HomeComponent } from '@/components/Home';
import React from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div className={styles.main}>
        <HomeComponent />
      </div>
      <Footer />
    </>
  );
}
