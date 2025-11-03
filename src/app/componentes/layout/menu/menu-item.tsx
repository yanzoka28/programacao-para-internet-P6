import Link from "next/link";

interface MenuItemProps{
    href: string;
    label: string;
    
}

const MenuItem: React.FC <MenuItemProps> = (props: MenuItemProps) => {

    return(
        <Link href={props.href}>
            <span className="icon"></span> {props.label}
        </Link>
    )

}
export default MenuItem