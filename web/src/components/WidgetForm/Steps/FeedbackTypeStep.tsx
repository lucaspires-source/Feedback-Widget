import React from 'react'
import { feedbackTypes, FeedbackType } from '..'

interface FeedbackTypeStepProps {
    onFeedbackTypeChange: (type: FeedbackType) => void
}

export default function FeedbackTypeStep({onFeedbackTypeChange} : FeedbackTypeStepProps) {
  return (

<div className="flex py-8 gap-2 w-full">
   { Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            className=" bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            key={key}
            onClick={() => onFeedbackTypeChange(key as FeedbackType)}
            type="button"
          >
            <img
              className="h-12 w-12"
              src={value.image.src}
              alt={value.image.alt}
            />
            <span className="text-xl leading-6">{value.title}</span>
          </button>
        )
      })}
    </div>
  )
}
