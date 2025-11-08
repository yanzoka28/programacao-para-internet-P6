'use client'

import { useState } from "react";

export interface MessageProps{
    tipo?: string;
    mensagem: string;
    onClose?: () => void;
}

const Message: React.FC <MessageProps> = ({tipo, mensagem, onClose}) => {

    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false)

        if(onClose){
            onClose
        }
    }

    if(!visible){
        return null;
    }

    return(

        <article className={`notification is-${tipo}`}>
            <div className="message-header is-flex is-justify-content-flex-end">
                <button className="delete" aria-label="delete" onClick={handleClose}></button>
            </div>
            <div className="message-body">
                {mensagem}
            </div>
        </article>

    )

    
    
}

export default Message;