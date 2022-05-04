import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/bug.svg";
import ideiaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";

const feeedbackTypes ={
    BUG:{
        title: "Problema",
        image:{
        source:bugImageUrl,
        alt:"Imagem de um inseto"
        },


    },
    IDEIA: {
        title: "ideia",
        image: {
            source:ideiaImageUrl,
            alt:"Imagem de uma lâmpada"
        }

    },

    OTHER: {
    title: "Outro",
    image:{
        source:thoughtImageUrl,
        alt:"Imagem de um balão de pensamento"

    }
    },

};

//Object.entries(feedbackTypes) =>
// [
//     ["BUG",{...}],
//     ["IDEIA",{...}],
//     ["THOUGHT",{...}]
// ]

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
          <span className="text-xl leading-6"> Deixe seu feedback</span>

          <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
         {Object.entries(feeedbackTypes).map(([key,value])=>{
             return(
                 <button>
                     <img src={value.image.source} alt={value.image.alt} />
                     <span>
                         {value.title}
                     </span>
                 </button>
             );
         }
         )}

      </div>
      
      <footer className="text-xs text-neutral-400">
      Feito com ♥ por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/givaildo-andrade-b2988469/"> Gil</a>
      </footer>
    </div>
  );
}
