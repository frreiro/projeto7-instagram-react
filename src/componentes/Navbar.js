export default function Navbar() {
    return (
        <header class="navbar">
            <div class="container">
                <section class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </section>

                <section class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </section>

                <section class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </section>

                <section class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </section>

                <nav class="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </nav>

                <section class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </section>
            </div>
        </header>
    )
}