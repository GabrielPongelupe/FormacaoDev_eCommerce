import Logo from '../shared/Logo'
import IconeCarrinho from '../shared/IconeCarrinho'
import Link from 'next/link'

export default function Cabecalho() {
    const qtdeItens = 0
    return (
        <div
            className="flex flex-col h-20"
            id='cabecalho'
            style={{
                background: 'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)',
            }}
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <Logo />

                    {/* Link para "Sobre mim" com novo estilo */}
                    <a 
                        href="#sobre" 
                        className="text-white text-sm font-medium transition duration-300 hover:font-bold hover:underline hover:scale-105"
                    >
                        Sobre o criador do site
                    </a>
                    
                    <Link href="/checkout/carrinho">
                        <IconeCarrinho qtdeItens={qtdeItens} />
                    </Link>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
        </div>
    )
}
