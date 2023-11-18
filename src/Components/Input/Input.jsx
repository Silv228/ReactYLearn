import { forwardRef } from "react"
import styles from "./Input.module.css"

export const Input = forwardRef(({ children, error, ...props }, inputRef) => {
    return (
        <input ref={inputRef} className={`${styles.input} ${error && styles.error}`} {...props}>{children}</input>
    )
})