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
            <img src={feedbackTypeData.image.src} alt={feedbackTypeData.image.alt} />
            {feedbackTypeData.title}      
        </span>
        <CloseButton />
    </header>
    <div className="flex py-8 gap-2 w-full">

    </div>
    </React.Fragment>
  )
}
