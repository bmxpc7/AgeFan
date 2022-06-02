<script>
    import "./login.scss";
    import logo from "../../assets/aoe.png";
    import ModalMensajes from "../../components/modalMensajes/modalMensajes.svelte";
    let userLogin = {
        nick: "",
        pass: "",
    };
    let name = "";
    function onSubmit(e) {
        const login = [
            {
                user: "bmxpc7",
                password: "Admin123#",
                name: "Víctor Hugo Núñez",
            },
            {
                user: "jampc7",
                password: "Admin123#",
                name: "Juan Martin Núñez",
            },
        ];
        e.preventDefault();
        const user = login.filter(
            (item) =>
                userLogin.nick === item.user && userLogin.pass === item.password
        );
        if (user.length > 0) {
            name = user[0].name;
        } else {
            alert("Usuario no encontrado");
        }
        /* login.forEach(item=>{
        if (userLogin.nick === item.user && userLogin.pass === item.password) {

            return true;
        }else{
            alert("Usuario no identificado")
            return true;
        }
    }) */
        console.log(userLogin);
    }

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        userLogin = { ...userLogin, [name]: value };
    };
</script>

<section>
    {#if name !== ""}
        <ModalMensajes nombre={name} />
    {/if}
    <form on:submit={onSubmit} on:change={handleInputChange}>
        <img src={logo} alt="" srcset="" />
        <p>Usuario</p>
        <input type="text" name="nick" />
        <p>Contraseña</p>
        <input type="password" name="pass" />
        <input type="submit" value="Iniciar Sesión" />
    </form>
</section>
