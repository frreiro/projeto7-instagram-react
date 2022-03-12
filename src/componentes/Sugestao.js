
export default function Sugestao(props) {
    const { userImg, userName } = props;
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={userImg} />
                <div class="texto">
                    <div class="nome">{userName}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}