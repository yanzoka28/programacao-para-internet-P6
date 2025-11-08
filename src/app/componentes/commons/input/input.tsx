import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    onChange: (value: any) => void
    label: string
    id :  string
    columnClass? : string
}

const Input: React.FC <InputProps> = ({onChange, label, id, columnClass, ...inputProps}: InputProps) => {

    return(
        <div className={`field column ${columnClass}`}>
                <label className="label" htmlFor={id}>
                    {label}
                </label>
                <div className="control">
                    <input className="input" type="text" placeholder="R$ do Produto" id={id} {...inputProps} onChange={e => onChange(e.target.value)}/>
                </div>
        </div>
    )
}

export default Input