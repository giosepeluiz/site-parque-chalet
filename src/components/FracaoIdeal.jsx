/* eslint-disable jsx-a11y/no-onchange */
import { useState } from "react";
import dadosCondominio from "../data/dados_condominio.json";
import taxaCondominial from "../data/taxa_condominial.json";
import styles from "../styles/Simulacao.module.scss";
import Mensalidade from "./Mensalidade";
import MensalidadePersonalizada from "./MensalidadePersonalizada";


// Chamado de funções
import convertNumber from "../functions/convertNumbers";
import percentCalc from "../functions/percentCalc";
import quotaCalc from "../functions/quotaCalc";

const FracaoIdeal = ({ url, unidade }) => {
  const [mes, setMes] = useState(taxaCondominial.despesas.length - 1);
  const calculo = {
    areaComumCob: url.area_comum_cob,
    areaPrivatConst: url.area_privat_const,
    estacionamento: url.estacionamento,
    areaComumDesc: url.area_comum_desc,
    areaPrivatDesc: url.area_privat_desc,
    subtotalCob: url.area_comum_cob + url.area_privat_const,
    subtotalDesc: url.estacionamento + url.area_comum_desc + url.area_privat_desc,
  };

  const total = calculo.subtotalCob + calculo.subtotalDesc;
  const fraction = !url.note ? total / dadosCondominio.area_total_util : url.convention_fraction;

  return (
    <>
      <div className={styles["info-wrapper"]}>
        <div className={styles["info-half"]}>
          <h1 className={styles["info-title"]}>Área Coberta</h1>

          <p className={styles["info-item"]}>
            Informações da Unidade:
            <br />
            <span className={styles["info-text"]}>{unidade}</span>
          </p>

          <p className={styles["info-item"]}>
            Quota de Área Coberta:
            <br />
            <span className={styles["info-text"]}>{convertNumber(calculo.areaComumCob, 2)}m²</span>
          </p>

          <p className={styles["info-item"]}>
            Área Privativa Construída:
            <br />
            <span className={styles["info-text"]}>
              {convertNumber(calculo.areaPrivatConst, 2)}m²
            </span>
          </p>

          <p className={styles["info-item"]}>
            Total:
            <br />
            <span className={styles["info-text"]}>
              {convertNumber(calculo.subtotalCob, 2)}m² de{" "}
              {convertNumber(dadosCondominio.area_total_cob, 2)}m² (
              {percentCalc(calculo.subtotalCob, dadosCondominio.area_total_cob)}%)
            </span>
          </p>
        </div>
        <div className={styles["info-half"]}>
          <h1 className={styles["info-title"]}>Área Descoberta</h1>

          <p className={styles["info-item"]}>
            Quota Área Comum Descoberta:
            <br />
            <span className={styles["info-text"]}>{convertNumber(calculo.areaComumDesc, 2)}m²</span>
          </p>

          <p className={styles["info-item"]}>
            Vaga de Estacionamento:
            <br />
            <span className={styles["info-text"]}>
              {convertNumber(calculo.estacionamento, 2)}m²
            </span>
          </p>

          <p className={styles["info-item"]}>
            Área Privativa Descoberta:
            <br />
            <span className={styles["info-text"]}>
              {calculo.areaPrivatDesc
                ? `${convertNumber(calculo.areaPrivatDesc, 2)}m²`
                : "Não possui área privativa"}
            </span>
          </p>

          <p className={styles["info-item"]}>
            Total:
            <br />
            <span className={styles["info-text"]}>
              {convertNumber(calculo.subtotalDesc, 2)}m² de{" "}
              {convertNumber(dadosCondominio.area_total_desc, 2)}m² (
              {percentCalc(calculo.subtotalDesc, dadosCondominio.area_total_desc)}%)
            </span>
          </p>
        </div>
      </div>
      <div className={styles["info-total"]}>
        <h1 className={styles["info-title"]}>Dados Totais da Unidade</h1>

        <p className={styles["info-item"]}>
          Total de Quota Coberta e Descoberta:
          <br />
          <span className={styles["info-text"]}>{convertNumber(total, 2)}m²</span>
        </p>

        <p className={styles["info-item"]}>
          Fração Ideal:
          <br />
          <span className={styles["info-text"]}>{convertNumber(fraction, 7)}</span>
          {url.note ? (
            <span className={styles["info-small"]}>
              <br />
              ⚠️{url.note}
            </span>
          ) : (
            ""
          )}
        </p>

        <p className={styles["info-item"]}>
          Quota da Área do Condomínio:
          <br />
          <span className={styles["info-text"]}>
            {quotaCalc(dadosCondominio.area_condominio, fraction)}m² de{" "}
            {convertNumber(dadosCondominio.area_condominio)}m² (
            {percentCalc(
              quotaCalc(dadosCondominio.area_condominio, fraction),
              dadosCondominio.area_condominio,
            )}
            %)
          </span>
        </p>
      </div>

      <div className={styles["select-wrapper"]}>
        <select className={styles.select} onChange={(e) => setMes(e.target.value)}>
          <option value="" selected disabled hidden>
            Selecione um mês
          </option>

          {taxaCondominial.despesas.map((m) => (
            <option key={m.id} value={m.id}>
              {m.mes} de {m.ano}
            </option>
          ))}
          <option value="-1">Simular valores</option>
        </select>
      </div>

      {mes < 0 ? (
        <MensalidadePersonalizada fraction={fraction} styles={styles} />
      ) : (
        <Mensalidade fraction={fraction} mes={mes} styles={styles} />
      )}
    </>
  );
};

export default FracaoIdeal;
