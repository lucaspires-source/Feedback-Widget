import { CloseButton } from "./CloseButton";


const feedbackTypes = {
    BUG: {
    title:'Problema',
    image :{
        src:'../../assets/icons/bug.svg',
        alt:'problema'
    }
    },
    IDEA:{
        title:'Ideia',
        image :{
            src:'../../assets/icons/idea.svg',
            alt:'ideia'
        }
        
    },
    OTHER :{
        title:'Outro',
        image :{
            src:'../../assets/icons/other.svg',
            alt:'outro'
        }


    }
}
export function WidgetForm (){
    return (    
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                <button></button>
            </div>
            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://github.com/lucaspires-source">Lucas Ribeiro Pires</a>
            </footer>
        </div>


    )
}
