
export default function Post(props) {
    const { 
        setUserImg,
        setImg,
        setUserLike,
        setMainLike,
        setLikes } = props;

    return (
        <div class="post">
            <header class="topo">
                <figure class="usuario">
                    <img src={setUserImg} />
                    meowed
                </figure>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </header>

            <main class="conteudo">
                <img src={setImg} />
            </main>

            <footer class="fundo">
                <nav class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </nav>

                <section class="curtidas">
                    <img src={setUserLike} />
                    <div class="texto">
                        Curtido por <strong>{setMainLike}</strong> e <strong>outras {setLikes} pessoas</strong>
                    </div>
                </section>
            </footer>
        </div>
    )
}