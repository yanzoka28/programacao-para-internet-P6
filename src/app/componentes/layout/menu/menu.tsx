import React from "react";
import 'bulma/css/bulma.css'
import MenuItem from "./menu-item";

const Menu: React.FC = () => {
    return(
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">

            <p className="is-hidden-touch">
                PetClin
            </p>

            <ul className="menu-list">
                <MenuItem href="/" label="Inicio"/>
                <MenuItem href="/componentes/produtos/list" label="Produto"/>
                <MenuItem href="/" label="Agendamento"/>
                <MenuItem href="/" label="Sair"/>
                
            </ul>
        </aside>

    )   
    
}
export default Menu