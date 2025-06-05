import icon from '../img/icon.png'
const Tudo = ({foto , nome ,numero, posicao , habilidade , time}) => {
    return(
        <div className='div'>
                    <img className='img' src={foto} alt="foto"/>
            <div>
                <div className='text'>

                <div className='texto'>
                    <h1 >{nome}</h1>
                    <h1 className='h1'>#{numero}</h1>
                </div>
             <h1>{posicao} - {time}</h1>
             </div>
                <div className='texto2'>
                   <img className='icon' src={icon} alt="" />
                   <h1 className='h1-baixo'>Habilidade:{habilidade}</h1>
                </div>
            </div>
        </div>
    )
}
export default Tudo 