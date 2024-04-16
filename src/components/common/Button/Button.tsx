import { ButtonHTMLAttributes } from "react";
import styles from './Button.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...rest}:IButton){
    return <button className={styles.buttonBase}{...rest}>{children}</button>
}