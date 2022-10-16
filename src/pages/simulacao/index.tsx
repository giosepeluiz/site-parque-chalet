import { useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import FracaoIdeal from "../../components/FracaoIdeal";
import fracao from "../../data/fracao_ideal.json";
import styles from "../../styles/Simulacao.module.scss";
import Header from "../../components/Header";

const Simulacao = () => {
  const [bloco, setBloco] = useState(null);
  const [apto, setApto] = useState(null);

  return (
    <>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Simulação de Balancete - Condomínio Parque Chalet"
        description="Simulação de Balancete - Condomínio Parque Chalet"
        openGraph={{
          type: "website",
          url: "https://parquechalet.com.br",
          title: "Simulação de Balancete - Condomínio Parque Chalet",
          description: "Simulação de Balancete - Condomínio Parque Chalet",
          images: [
            {
              url: "https://parquechalet.com.br/images/og-banner.jpg",
              width: 800,
              height: 420,
              alt: "Condomínio Parque Chalet",
            },
          ],
          site_name: "Condomínio Parque Chalet",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "../icons/favicon.ico",
          },
        ]}
      />

      {/* Link persistente de retorno */}
      <Link href="/" passHref>
        <div className={styles["main-back"]}>↩</div>
      </Link>

      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}
      <main
        className={`${styles["main-wrapper"]} ${
          bloco && apto ? styles["main-position-column"] : styles["main-position-row"]
        }`}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/videos/background.webm" type="video/webm" />
        </video>

        <div className={styles["main-content"]}>
          <h1 className={styles["main-title"]}>Simulação de Rateio por Fração Ideal</h1>

          <nav className={styles["select-wrapper"]}>
            <select
              className={styles.select}
              onChange={(e) => setBloco(e.target.value)}
              onBlur={null}>
              <option value="" selected disabled hidden>
                Bloco
              </option>
              <option value="0">Bloco 1</option>
              <option value="1">Bloco 2</option>
              <option value="2">Bloco 3</option>
              <option value="3">Bloco 4</option>
              <option value="4">Bloco 5</option>
              <option value="5">Bloco 6</option>
              <option value="6">Bloco 7</option>
              <option value="7">Bloco 8</option>
              <option value="8">Bloco 9</option>
              <option value="9">Bloco 10</option>
            </select>

            <select
              className={styles.select}
              onChange={(e) => setApto(e.target.value)}
              onBlur={null}>
              <option value="" selected disabled hidden>
                Apartamento
              </option>
              <option value="0">Apartamento 101</option>
              <option value="1">Apartamento 102</option>
              <option value="2">Apartamento 103</option>
              <option value="3">Apartamento 104</option>
              <option value="4">Apartamento 201</option>
              <option value="5">Apartamento 202</option>
              <option value="6">Apartamento 203</option>
              <option value="7">Apartamento 204</option>
              <option value="8">Apartamento 301</option>
              <option value="9">Apartamento 302</option>
              <option value="10">Apartamento 303</option>
              <option value="11">Apartamento 304</option>
              <option value="12">Apartamento 401</option>
              <option value="13">Apartamento 402</option>
              <option value="14">Apartamento 403</option>
              <option value="15">Apartamento 404</option>
            </select>
          </nav>

          {bloco && apto ? (
            <>
              <div className={styles.content}>
                <FracaoIdeal
                  url={fracao[bloco].unidades[apto].data}
                  unidade={`Bloco ${fracao[bloco].bloco} - Apartamento ${fracao[bloco].unidades[apto].apto}`}
                />
              </div>
              <footer className={styles.footer}>
                <strong>Esta página tem apenas fins de estudo.</strong>
                <br />
                Ainda que seja baseada em dados reais, não tem validade legal.
              </footer>
            </>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
};

export default Simulacao;
