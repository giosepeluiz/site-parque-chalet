/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-onchange */
import { useState } from "react";
import taxaCondominial from "../data/taxa_condominial.json";
import styles from "../styles/Simulacao.module.scss";
import MensalidadeItem from "./MensalidadeItem";

import valueTest from "../functions/valueTest";

const Mensalidade = ({fraction}) => {

    const [rateadas, setRateadas] = useState(0);
    const [naoRateadas, setNaoRateadas] = useState(0);

        const values = {
            despesas: valueTest(valueTest(rateadas) - valueTest(naoRateadas)),
            rateado: 0,
            reserva: 0,
            total: 0,
            taxaGarantidora: 0,
            taxaBoleto: taxaCondominial.taxa_boleto,
            fundoBenfeitorias: taxaCondominial.fundo_benfeitorias
        }

        // Calcula o valor rateado das despesas para cada unidade
        values.rateado = values.despesas * fraction
        
        // Calcula o fundo de reservas
        values.reserva = values.rateado * taxaCondominial.fundo_reservas;
        
        // Calcula o subtotal para poder gerar a taxa da garantidora
        values.total = values.rateado + values.reserva + values.fundoBenfeitorias;
        
        // Calcula a taxa da garantidora
        values.taxaGarantidora = values.total * taxaCondominial.taxa_cobranca;
        
        // Calcula o total
        values.total = values.total + values.taxaGarantidora + values.taxaBoleto;

    
    return(
        <div className={styles["info-total"]}>
        
        <h1 className={styles["info-title"]}>Rateio Personalizado</h1>

        <div className={styles["select-wrapper"]}>
            <label htmlFor="rateado">Valor total das despesas: <input id="rateado" type="text" name="rateado" value={rateadas} onChange={e => setRateadas(e.target.value)} className={`${styles.select} ${styles.currency}`} /></label>
            <label htmlFor="nao-rateado">Valor não rateado: <input id="nao-rateado" type="text" name="nao_rateado" value={naoRateadas} onChange={e => setNaoRateadas(e.target.value)} className={`${styles.select} ${styles.currency}`} /></label>
        </div><br />


        <MensalidadeItem infoItem="Valor total de despesas:" infoValue={values.despesas} styles={styles} />
            <MensalidadeItem infoItem="Valor rateado das despesas para a unidade:" infoValue={values.rateado} styles={styles} />
            <MensalidadeItem infoItem="10% do fundo de reservas (Lei Nº 4.591/64):" infoValue={values.reserva} styles={styles} />
            <MensalidadeItem infoItem="Valor do fundo de benfeitorias (AGE 09/2016):" infoValue={values.fundoBenfeitorias} styles={styles} />
            <MensalidadeItem infoItem="5% de taxa de garantidora (AGE 03/2021):" infoValue={values.taxaGarantidora} styles={styles} />
            <MensalidadeItem infoItem="Taxa de emissão de boleto (Condoplus):" infoValue={values.taxaBoleto} styles={styles} />
            <MensalidadeItem infoItem="Mensalidade total para a unidade:" infoValue={(values.total)} styles={styles} />

        </div>
    )}

export default Mensalidade;