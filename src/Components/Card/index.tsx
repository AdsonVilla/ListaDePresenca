import './styles.css'

export type CardProps = {
    name: string;
    time: string;
}
// princípio de components: sempre uma function terá um return, o qual será um conteúdo HTML
export function Card(props: CardProps) {
    return(
        <div className='Card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>

        </div>
    )
}