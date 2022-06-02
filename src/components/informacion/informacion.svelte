<script>
    import "./informacion.js"
    import "./informacion.scss"
    import {imageCivilizations, imgExpansiones} from "../../utils/images"
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faChevronLeft, faChevronRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
    </script>

    <div class="modal-informacion">
        <div class="modal">
            <div class="modal__Body">
                <h1>Civilizacion</h1>
                <h1>Pantalla</h1>
                <h1>con</h1>
                <h1>informacion</h1>
                <h1>Pantalla</h1>
                <h1>con</h1>
                <h1>informacion</h1>
                <h1>Pantalla</h1>
                <h1>con</h1>
                <h1>informacion</h1>
            </div>
            <div class="barra-inferior">
                <Fa icon={faChevronLeft} size="2x" />
                <Fa icon={faGlobe} size="2x"/>
                <Fa icon={faChevronRight} size="2x"/>
            </div>
        </div>
    </div>