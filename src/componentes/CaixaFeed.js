export default function CaixaFeed() {
    return (
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
                    <p>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
                </div>
                <div class="comentarios">
                    <p class="quantidade">Ver todos os 100 comentários</p>
                    <div class="comentario">
                        <p><strong>@barked </strong>que fofinho</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="comentario">
                        <p><strong>@meowed </strong>lindinho</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="escrever-comentario">
                        <input type="text" name="input" placeholder="Adicione um comentário..." />
                        <button class="publicar"><p>Publicar</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}