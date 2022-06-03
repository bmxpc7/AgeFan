<script>
    import "./principal.js";
    import "./principal.scss";
    import { imageCivilizations, imgExpansiones } from "../../utils/images";
    import Usuario from "../../components/usuario/usuario.svelte";
    var user = localStorage.getItem("user");
    let saludo = "";
    if (user === "Víctor Hugo Núñez") {
        saludo = "Bienvenido Víctor Hugo";
    } else {
        saludo = "Bienvenido Juan Martin";
    }
</script>
<div class="principal__window">
    <Usuario />
<h1>{saludo}</h1>

</div>
