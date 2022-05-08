import React from "react";
import styles from "./formsControle.module.css"


let formsControl =({input,meta,  ...props})=>{
    const hasError = meta.touched && meta.error ;
    return <div className={styles.formControl + " " + (hasError? styles.error:' ')}>
        <div>
            <textarea  {...input} {...props}/>
        </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>

    </div>
}
export const TextArea = ({input,meta,  ...props}) =>{
    const hasError = meta.touched && meta.error ;
    return <div className={styles.formControl + " " + (hasError? styles.error:' ')}>
       <div>
           <textarea  {...input} {...props}/>
       </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>

    </div>
}
export const Input = ({input,meta,  ...props}) =>{
    const hasError = meta.touched && meta.error ;
    return <div className={styles.formControl + " " + (hasError? styles.error:' ')}>
       <div>
           <input  {...input} {...props}/>
       </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>

    </div>
}