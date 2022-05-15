import { ArrowLeft, Camera } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackReset: () => void;
  onFeedbackSent: () => void;
}

export default function FeedbackContentStep({
  feedbackType,
  onFeedbackReset,
  onFeedbackSent
}: FeedbackContentStepProps) {
  const feedbackTypeData = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState <string | null> (null);
  const [comment, setComment ] = useState('')


  function handleSubmitFeedback(event:FormEvent) {
    event.preventDefault();
    console.log({
      screenshot,
      comment
    })
    
    onFeedbackSent()
  }
  return (
    <React.Fragment>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackReset}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeData.image.src}
            alt={feedbackTypeData.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeData.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="
                    min-w-[304px] 
                    w-full 
                    min-h-[112px] 
                    text-sm 
                    placeholder-zinc-400 
                    text-zinc-100
                    border-zinc-600 
                    bg-transparent 
                    rounded-md 
                    focus:border-x-brand-500 
                    focus:ring-brand-500 
                    focus:ring-1 resize-none
                    focus:outline-none
                    scrollbar
                    scrollbar-thumb-zinc-700
                    scrollbar-track-transparent
                    scrollbar-thin
                    "
          placeholder="Conte com detalhes o que ocorreu"
          onChange={(e) =>  setComment(e.target.value)}
        />
      <footer className=" flex gap-2 mt-1">
        <ScreenshotButton  onScreenshotTaken={setScreenshot} screenshot={screenshot} />
        <button
          type="submit"
          disabled={comment.length === 0}
          className="p-2
             bg-brand-500
              rounded-md 
              border-transparent 
              flex
              flex-1 
              justify-center 
              items-center
               text-sm
                hover:bg-brand-300 
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-zinc-900
                focus:ring-brand-500
                disabled:opacity-50
                disabled:hover:bg-brand-300
                "
        >
          Enviar Feedback
        </button>
      </footer>
      </form>
    </React.Fragment>
  );
}
