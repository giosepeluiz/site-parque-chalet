import { NextSeo } from "next-seo";
// import Image from "next/image";
import { useEffect } from "react";
// import logo from "../../../public/images/avatar-logo-chalet.jpg";
import styles from "../../styles/Home.module.scss";

export default function Home() {
  //   useEffect(() => {
  //     // window.location.replace(
  //     //   "https://calendar.google.com/calendar/u/0/embed?src=tjnqorr3tcei4qe2mhmtthgg7g@group.calendar.google.com&ctz=America/Sao_Paulo",
  //     // );
  //     alert("Este calendário é apenas para conferência, para reservar fale com o síndico."); // eslint-disable-line no-alert
  //   }, []);

  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Regimento Interno - Condomínio Parque Chalet"
        description="Regimento Interno - Condomínio Parque Chalet"
        openGraph={{
          type: "website",
          url: "https://parquechalet.com.br",
          title: "Regimento Interno - Condomínio Parque Chalet",
          description: "Regimento Interno - Condomínio Parque Chalet",
          images: [
            {
              url: "https://parquechalet.com.br/images/og-banner.jpg",
              width: 800,
              height: 420,
              alt: "Regimento Interno - Condomínio Parque Chalet",
            },
          ],
          site_name: "Regimento Interno - Condomínio Parque Chalet",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "icons/favicon.ico",
          },
        ]}
      />

      <iframe
        src="https://parquechalet.com.br/doc/regimento-interno.pdf"
        title="Regimento Interno - Condomínio Parque Chalet"
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
