import { NextSeo } from "next-seo";
// import Image from "next/image";
// import logo from "../../../public/images/avatar-logo-chalet.jpg";
import styles from "../../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Balancetes - Condomínio Parque Chalet"
        description="Balancetes - Condomínio Parque Chalet"
        openGraph={{
          type: "website",
          url: "https://parquechalet.com.br",
          title: "Balancetes - Condomínio Parque Chalet",
          description: "Balancetes - Condomínio Parque Chalet",
          images: [
            {
              url: "https://parquechalet.com.br/images/og-banner.jpg",
              width: 800,
              height: 420,
              alt: "Balancetes - Condomínio Parque Chalet",
            },
          ],
          site_name: "Balancetes - Condomínio Parque Chalet",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "icons/favicon.ico",
          },
        ]}
      />

      <iframe
        src="https://drive.google.com/drive/folders/12WqhVI3R5CL5GxXu8hZPY4_KyYaOVoEu?usp=sharing"
        title="Balancetes - Condomínio Parque Chalet"
        style={{
          border: "0px",
          padding: "0px",
          margin: "0px",
          width: "100vw",
          height: "100vh",
        }}
      />

      {/* Conteúdo principal */}
      {/* <main className={styles.main}>
        <Image src={logo} width="300" height="300" alt="Condomínio Parque Chalet" />
        <h1 className={styles.redirect}>Redirecionando...</h1>
      </main> */}

      {/* <footer className={styles.footer} /> */}
    </div>
  );
}
