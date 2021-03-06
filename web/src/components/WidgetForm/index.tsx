import React, { useState } from "react";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg"
import otherImageUrl from "../../assets/other.svg";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSucessStep from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: "Imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      src: otherImageUrl,
      alt: "Imagem de um Balao de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
       {feedbackSent ? (
         <FeedbackSucessStep onFeedbackReset={handleRestartFeedback} />
       ):        
        <React.Fragment>
        {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}/>
          ) : (
            <FeedbackContentStep  feedbackType={feedbackType} onFeedbackReset={handleRestartFeedback} onFeedbackSent={() =>  setFeedbackSent(true)}/>
          )
        }
       </React.Fragment>
       }
       

      <footer className="text-xs text-neutral-400 mt-2">
        Feito por{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/lucaspires-source"
        >
          Lucas Ribeiro Pires
        </a>
      </footer>
    </div>
  );
}
