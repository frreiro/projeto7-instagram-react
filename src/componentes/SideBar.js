import Sugestao from "./Sugestao";


const sugestoes = [
    {user: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes" },
    {user: "assets/img/chibirdart.svg", name: "chibirdart" },
    {user:"assets/img/razoesparaacreditar.svg", name:"razoesparaacreditar"},
    {user:"assets/img/adorable_animals.svg", name:"adorable_animals"},
    {user:"assets/img/smallcutecats.svg", name:"smallcutecats"}
]



export default function SideBar() {
    return (
        <aside class="sidebar">
            <header class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </header>

            <main class="sugestoes">
                <section class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </section>
                {sugestoes.map((sugestao)=>{
                    const {user, name} = sugestao;
                    return (
                        <Sugestao
                        userImg={user}
                        userName={name}
                    />
                    )
                })}

            </main>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </aside>
    )
}
