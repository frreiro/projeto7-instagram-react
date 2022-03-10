export default function BarraTopo() {
    return (
        <header class="barra-topo">
            <nav class="barra">
                <section class="topo-instagram">
                    <img class="logo" src="imagens/logo-instagram.svg" />
                    <div class="separador-vertical"></div>
                    <img class="logo-nome" src="imagens/logo.png" />
                </section>

                <input class="topo-pesquisar" placeholder="Pesquisar"/>

                <section class="topo-icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </section>
            </nav>
            <div class="separador-horizontal"></div>
        </header>
    )
}