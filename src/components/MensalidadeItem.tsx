function convertCurrency(value: number) {
  const applyValue = value.toFixed(2);
  return `${Number(applyValue).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
}

const MensalidadeItem = ({ infoItem, infoValue, styles }) => (
  <>
    <p className={styles["info-item"]}>
      {infoItem}
      <br />
      <span className={styles["info-text"]}>{convertCurrency(infoValue)}</span>
    </p>
  </>
);

export default MensalidadeItem;
