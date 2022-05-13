import { CloseButton } from "./CloseButton";
import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import otherImageUrl from "../assets/other.svg";

const feedbackTypes = {
    BUG: {
    title:'Problema',
    image :{
        src:bugImageUrl,
        alt:'Imagem de um inseto'
    }
    },
    IDEA:{
        title:'Ideia',
        image :{
            src:ideaImageUrl,
            alt:'Imagem de uma lampada'
        }
        
    },
    OTHER :{
        title:'Outro',
        image :{
            src:otherImageUrl,
            alt:'Imagem de um Balao de pensamento'
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
                {Object.entries(feedbackTypes).map(([key,value])=>{
                    return(
                        <button className=" bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none" key={key}>
                                <img className="h-12 w-12" src={value.image.src} alt={value.image.alt} />
                                <span className="text-xl leading-6">{value.title}</span>
                        </button>
                    )
                })}
            </div>
            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://github.com/lucaspires-source">Lucas Ribeiro Pires</a>
            </footer>
        </div>


    )
}
