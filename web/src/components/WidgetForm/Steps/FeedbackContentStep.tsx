import { ArrowLeft } from "phosphor-react"
import React from "react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType,
    onFeedbackReset: () => void;
}

export default function FeedbackContentStep({feedbackType, onFeedbackReset} : FeedbackContentStepProps) {
    const feedbackTypeData = feedbackTypes[feedbackType]
  return (
    <React.Fragment>
        <header>
            <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={onFeedbackReset}>
                <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feedbackTypeData.image.src} alt={feedbackTypeData.image.alt} className="w-6 h-6" />
                {feedbackTypeData.title}      
            </span>
            <CloseButton />
        </header>
        <form className="my-4 w-full">
            <textarea className="
                    min-w-[304px] 
                    w-full min-h=[112px] 
                    text-sm 
                    placeholder-zinc-400 
                    text-zinc-100
                    border-1 
                    border-zinc-600 
                    bg-transparent 
                    rounded-md 
                    focus:border-x-brand-500 
                    focus:ring-brand-500 
                    focus:ring-1 resize-none
                    focus:outline-none

                    " 
                    placeholder="Conte com detalhes o que ocorreu"/>
        </form>
    </React.Fragment>
  )
}
