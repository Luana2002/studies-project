import style from '../Lista.module.scss'
function Item({ tarefa, tempo }: { tarefa: string, tempo: string }) {
    return (
        <div>
            <li className={style.item}>
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
            </li>
        </div>
    )
}

export default Item;