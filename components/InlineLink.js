export default function IL(props) {

    return(
        <a href={props.href} target="_blank" title={props.tooltip}>
            {props.children}
        </a>
    )
}