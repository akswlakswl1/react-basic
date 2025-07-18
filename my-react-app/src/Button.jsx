//import styles from './Button.module.css'

function Button(){

    const styles = {
        backgroundColor: "hsl(200,100%,50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        //<button className="button">Click me</button> index.css에서 받아와서 적용 -> EXTERNAL
        //<button className={styles.button}>Click me</button> -> Button.module.css 전용모듈 생성 -> MODULES
        <button style={styles}>Click me</button> //직접 작성해서 적용 ->Inline
    )
}

export default Button