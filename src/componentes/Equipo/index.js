import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    //Desctructuración
    const{ colorPrimario, colorSecundario, titulo } = props.datos
    const { colaboradores } = props
        const obj = {
        backgroundColor: colorSecundario
        }
     console.log(colaboradores.lenght > 0)

    const estiloTitulo = {borderColor: colorPrimario }

    return <>
        { 
            colaboradores.lenght > 0 &&
            <section className="equipo" style={obj} >
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores" >
                    {
                        colaboradores.map ((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        />)
                    }
                </div>
            </section>
        }
    </>
}
        
export default Equipo   