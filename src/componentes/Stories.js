let stories = [
    { img: "assets/img/9gag.svg", user: "9gag" },
    { img: "assets/img/meowed.svg", user: "meowed" },
    { img: "assets/img/barked.svg", user: "barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
    { img: "assets/img/wawawicomics.svg", user: "wawawicomics" },
    { img: "assets/img/respondeai.svg", user: "respondeai" },
    { img: "assets/img/filomoderna.svg", user: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }
]


export default function Stories() {

    return (
        <section class="stories">
                {stories.map((story) => {
                    return <Story userImg={story.img} userName={story.user}/>
                })}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </section>
    )
}

function Story(props) {
    return (
        <figure class="story">
            <div class="imagem">
                <img src={props.userImg} />
            </div>
            <figcaption class="usuario">
                {props.userName}
            </figcaption>
        </figure>
    )
}