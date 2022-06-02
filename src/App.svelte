<script>
  import "../node_modules/normalize.css/normalize.css"
  import { Router, Route } from "svelte-routing";
  import logo from "./assets/svelte.png";
  import Card from "./components/card/card.svelte";
  import Informacion from "./components/informacion/informacion.svelte";
  import Counter from "./lib/Counter.svelte";
  import Login from "./page/login/Login.svelte";
  import Principal from "./page/principal/Principal.svelte";
  export let url = "";
</script>
<Router url="{url}">
  <div>
    <Route path="informacion" component="{Informacion}" />
    <Route path="principal" component="{Principal}" />
    <Route path="/"><Login /></Route>
  </div>
</Router>