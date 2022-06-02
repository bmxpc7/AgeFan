<script>
import "./principal.js"
import "./principal.scss"
import {imageCivilizations, imgExpansiones} from "../../utils/images"
var user = localStorage.getItem('user');
let saludo = ""
if (user === "Víctor Hugo Núñez") {
    saludo = "Bienvenido Víctor Hugo"
}else{
    saludo = "Bienvenido Juan Martin"

}
</script>

<h1>{saludo}</h1>