import React from "react";
import Botao from "../button/button";
class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione os seus Estudos
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que voce quer estudar?" />
                </div>
                <div>
                    <label>
                        Tempo

                    </label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
                    <Botao />
                </div>
            </form>
        )
    }
}

export default Formulario