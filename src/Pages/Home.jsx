import '../assets/css/pages-styles/Home.css'
function Home (){

    return(
        <main className='main-home'>
            <div className='info-home'>
                <div className="text-home">
                    <h1>Digitalize o seu Negocio com a TUC CODE</h1>
                    <p>Especializados na manutenção e criação de websites e sistemas para fortalecer o seu negocio</p>
                    
                    <button className='btn-contact'>FAÇA O SEU ORÇAMENTO</button>
                </div>
                <img src="https://img.freepik.com/vetores-gratis/conceito-de-design-moderno-web-com-estilo-simples_23-2147932566.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1713830400&semt=aisr" className='home-image' alt="" />
                
            </div>
        </main>
    )
}

export default Home;