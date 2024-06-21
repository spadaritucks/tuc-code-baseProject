import '../assets/css/pages-styles/Forms.css'
function Register() {
    return (

        <>
            <main className="main-form">
                <div className="area-form">
                    <h2>Crie sua Conta</h2>
                    <form action="" id="register-form">

                            <input type="text" id='nome' name='nome' placeholder='Nome Completo' />
                            <input type="email" id='email' name='email' placeholder='Email' />
                            <input type="text" id='cpf' name='cpf' placeholder='CPF' />
                            <input type="text" id='telefone' name='telefone' placeholder='Telefone' />
                            <input type="password" id='password' name='password' placeholder='Senha' />
                            <input type="password" id='repeat-password' name='repeat-password' placeholder='Confirme a Senha' />

                        <button type="submit" className="btn-form">Criar a Conta</button>
                    </form>
                </div>
            </main>


        </>


    )
}

export default Register