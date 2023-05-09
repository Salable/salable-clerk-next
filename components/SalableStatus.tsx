import styles from "/styles/Header.module.css";

const RenderUserObjectAsDiv = ({capabilities}) => {
    return capabilities ? 
    <>
        <h3>Salable - License Info</h3>
        <div>
            Capabilities: {capabilities}
        </div>
        <hr/>
    </>
    : 
    <></>

}

const SalableStatus = ({capabilites}) => (
    <div className={styles.div}>
      <RenderUserObjectAsDiv capabilities={capabilites} />
    </div>
);

export default SalableStatus