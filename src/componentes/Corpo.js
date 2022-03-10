import ActionBar from "./ActionBar"
import CaixaFeed from "./CaixaFeed"
import CaixaStories from "./CaixaStories"
import SideBar from "./SideBar"


export default function Corpo() {
    return (
        <div class="corpo-site">
            <div class="conteudo">
                <CaixaStories />
                <CaixaFeed />

                <div class="caixa-feed">
                    <div class="cabecalho-feed">
                        <div class="img">
                            <img src="imagens/barked 1.png" />
                            <p>barked</p>
                        </div>
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </div>
                    <video class="post" autoplay muted loop>
                        <source src="imagens/video.mp4" type="video/mp4" />
                        <source src="imagens/video.ogv" type="video/ogv" />
                        Seu navegador não suporta vídeos.
                    </video>
                    <div class="rodape-feed">
                        <div class="icon">
                            <div class="icon-esquerda">
                                <ion-icon class="coracao" name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div class="icon-direita">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
                        <div class="curtidas">
                            <img src="imagens/adorableanimals 1.png" />
                            <p>Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong></p>
                        </div>
                        <div class="comentarios">
                            <p class="quantidade">Ver todos os 100 comentários</p>
                            <div class="comentario">
                                <p><strong>@bad.vi </strong>ursão</p>
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                            <div class="comentario">
                                <p><strong>@adorable_animals </strong>cuidado ai !!</p>
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                            <div class="escrever-comentario">
                                <input type="text" name="input" placeholder="Adicione um comentário..." />
                                <button class="publicar"><p>Publicar</p></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="caixa-feed">
                    <div class="cabecalho-feed">
                        <div class="img">
                            <img src="imagens/meowed 1.png" />
                            <p>meowed</p>
                        </div>
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </div>
                    <img class="post" src="imagens/gato-telefone 1.jpg" />
                    <div class="rodape-feed">
                        <div class="icon">
                            <div class="icon-esquerda">
                                <ion-icon class="coracao" name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div class="icon-direita">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
                        <div class="curtidas">
                            <img src="imagens/respondeai 1.png" />
                            <p>Curtido por <strong>RespondeAi</strong> e <strong>outras 101.523 pessoas</strong></p>
                        </div>
                        <div class="comentarios">
                            <p class="quantidade">Ver todos os 100 comentários</p>
                            <div class="comentario">
                                <p><strong>@chinordart </strong>ta viciado já</p>
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                            <div class="comentario">
                                <p><strong>@smallcutecats </strong>essa luz faz mal pro olho</p>
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                            <div class="escrever-comentario">
                                <input type="text" name="input" placeholder="Adicione um comentário..." />
                                <button class="publicar"><p>Publicar</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ActionBar />
            <SideBar />
        </div>

    )
}