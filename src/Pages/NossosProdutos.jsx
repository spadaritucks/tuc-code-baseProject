import MediaCard from '../Components/MediaCard'
import '../assets/css/pages-styles/NossosProdutos.css'

function NossosProdutos() {
    return (
        <main className='main-produtos'>
            <h1>Nossos Produtos</h1>
            <div className='produtos-list'>
                <div className='product'>
                    <MediaCard />
                </div>
                <div className='product'>
                    <MediaCard />
                </div>
                <div className='product'>
                    <MediaCard />
                </div>
                <div className='product'>
                    <MediaCard />
                </div>
                <div className='product'>
                    <MediaCard />
                </div>
                <div className='product'>
                    <MediaCard />
                </div>
            </div>
        </main>
    )
}

export default NossosProdutos