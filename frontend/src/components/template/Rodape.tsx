import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconBrandYoutube,
    IconCode
} from '@tabler/icons-react'
import Logo from '../shared/Logo'
import Link from 'next/link'

export default function Rodape() {
    return (
        <footer id="sobre" className="flex flex-col bg-black/30 text-zinc-400 mt-10" >
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
            <div className="container flex flex-col py-10 gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <Logo />
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">Sobre</span>
                        <span className="text-sm">Gabriel Pongelupe de Carvalho</span>
                        <span className="text-sm">20y</span>
                        <span className="text-sm">Desenvolvedor FullStack</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">Contato</span>
                        <span className="text-sm">gabrielpongelupee@gmail.com</span>
                        <div className=" text-sm flex items-center gap-2 justify-center md:justify-start">
                            <IconCode size={20} className="text-neutral-200" />
                            <span>Meu Portifólio: <Link 
                                target='_blank' 
                                href={'https://pongelupee.vercel.app/'} 
                                className='text-blue-700 underline italic hover:text-blue-500'>
                                    Clique Aqui
                                </Link></span>
                        </div>
                        <div className=" text-sm flex items-center gap-2 justify-center md:justify-start">
                            <IconBrandWhatsapp size={20} className="text-green-500" />
                            <span>(31) 99903-6093</span>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    <div className="flex gap-2 ">
                        <a href="https://www.youtube.com/@GabrielPongelupe-p2c" target='_blank'>
                            <IconBrandYoutube size={28} stroke={1} href=''/>
                        </a>
                        <a href="https://www.instagram.com/pongelupee/profilecard/?igsh=OGRzYWRwaHJ5OTJ0" target='_blank'>
                            <IconBrandInstagram size={28} stroke={1} title='@pongelupee'/>
                        </a>
                        <a href='https://www.linkedin.com/in/gabrielpongelupe/' target='_blank'>
                            <IconBrandLinkedin size={28} stroke={1} />
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm text-zinc-500">
                        <div className="flex gap-1.5">
                            <span>Feito com</span>
                            <span>❤️</span>
                            <span>por: <strong>Gabriel Pongelupe</strong>  em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>em conjunto à </span>
                        <Link 
                            target='_blank' 
                            href={'https://escola.formacao.dev/'} 
                            className='text-blue-700 underline italic hover:text-blue-500'>
                                escola.formacao.dev
                        </Link>
                        <span className=''></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
