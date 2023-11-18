import { forwardRef } from "react"
import styles from "./Input.module.css"

export const Input = forwardRef(({ children, ...props }, inputRef) => {
    return (
        <input ref={inputRef} className={styles.input} {...props}>{children}</input>
    )
})