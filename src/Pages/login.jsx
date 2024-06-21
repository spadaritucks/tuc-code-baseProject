import '../assets/css/pages-styles/Forms.css'
function Login (){
    return (

        <>
            <main className="main-form">
                <div className="area-form">
                    <h2>Login</h2>
                    <form action="" id="login-form">

                            <input type="email" id='email' name='email' placeholder='Email' />
                            <input type="password" id='password' name='password' placeholder='Senha' />

                        <button type="submit" className="btn-form">Login</button>
                    </form>
                </div>
            </main>


        </>


    )
}

export default Login