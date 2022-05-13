import React from "react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
}

export default function FeedbackContentStep({feedbackType} : FeedbackContentStepProps) {
    const feedbackTypeData = feedbackTypes[feedbackType]
  return (
    <React.Fragment>
    <header>

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
