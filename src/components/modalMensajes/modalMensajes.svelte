<script>
    import { navigate } from "svelte-routing";
    import "./modalMensajes.scss";
    export let nombre;

    const onClick = () => {
        localStorage.setItem('user', nombre);
        navigate("/principal", { replace: true });
    };
</script>

<div class="modal-mensaje">
    <div class="modal__Body-mensaje">
        <h2>Bienvenido {nombre}</h2>
        <button on:click={onClick}>Continuar...</button>
    </div>
</div>
