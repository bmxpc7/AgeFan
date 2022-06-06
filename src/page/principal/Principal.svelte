<script>
    import axios from 'axios';
    import { url, civilizaciones } from "../../utils/api";
    import "./principal.js";
    import "./principal.scss";
    import Usuario from "../../components/usuario/usuario.svelte";
    import Card from "../../components/card/card.svelte";
    var user = localStorage.getItem("user");
    let saludo = "";
    if (user === "Víctor Hugo Núñez") {
        saludo = "Bienvenido Víctor Hugo";
    } else {
        saludo = "Bienvenido Juan Martin";
    }
    let cvts = []
    const civilizations = async () => {
        const data = await axios(url + civilizaciones);
        cvts = data.data.civilizations
    };
    civilizations();
</script>

<div class="principal__window">
    <Usuario />
    <h1>{saludo}</h1>
    <div class="cards-civilizations">
        {#each cvts as item}
            <Card data={item} />
        {/each}
    </div>
</div>
