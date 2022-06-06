<script>
    import "./card.js"
    import "./card.scss"
    import foto from "../../assets/svelte.png";
    import { imageCivilizations, imgExpansiones } from "../../utils/images";
    export let data
    console.log(data);
</script>

<section id="section">
    <h3>{data.name}</h3>
    <img src={imageCivilizations[(data.id)-1]["imagen"]} alt="foto" />
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aperiam!</p>
</section>
