import styles from './Button.module.css'

export default function Button({children, handleClick}){
	return(
		<>
			<button onClick={handleClick} className={styles.myButton}>{children}</button>
		</>
	)
}


