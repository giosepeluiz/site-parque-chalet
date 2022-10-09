/* eslint-disable jsx-a11y/no-onchange */
import taxaCondominial from "../data/taxa_condominial.json";
import styles from "../styles/Simulacao.module.scss";
import MensalidadeItem from "./MensalidadeItem";

const Mensalidade = ({fraction, mes}) => {
        const values = {
            despesas: taxaCondominial.despesas[mes].rateado, // Apresenta as despesas totais do condomínio
            rateado: taxaCondominial.despesas[mes].rateado * fraction, // Calcula o valor rateado das despesas para cada unidade
            reserva: 0,
            total: 0,
            taxaGarantidora: 0,
            taxaBoleto: taxaCondominial.taxa_boleto,
            fundoBenfeitorias: taxaCondominial.fundo_benfeitorias
        }

        
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

        <h1 className={styles["info-title"]}>Rateio para {taxaCondominial.despesas[mes].mes} de {taxaCondominial.despesas[mes].ano}</h1>

            <MensalidadeItem infoItem="Valor total de despesas no mês anterior:" infoValue={values.despesas} styles={styles} />
            <MensalidadeItem infoItem="Valor rateado das despesas para a unidade:" infoValue={values.rateado} styles={styles} />
            <MensalidadeItem infoItem="10% do fundo de reservas (Lei Nº 4.591/64):" infoValue={values.reserva} styles={styles} />
            <MensalidadeItem infoItem="Valor do fundo de benfeitorias (AGE 09/2016):" infoValue={values.fundoBenfeitorias} styles={styles} />
            <MensalidadeItem infoItem="5% de taxa de garantidora (AGE 03/2021):" infoValue={values.taxaGarantidora} styles={styles} />
            <MensalidadeItem infoItem="Taxa de emissão de boleto (Condoplus):" infoValue={values.taxaBoleto} styles={styles} />
            <MensalidadeItem infoItem="Mensalidade total para a unidade:" infoValue={(values.total + values.taxaBoleto)} styles={styles} />

        </div>
    )}

export default Mensalidade;