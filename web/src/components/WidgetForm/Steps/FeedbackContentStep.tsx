import { ArrowLeft, Camera } from "phosphor-react";
import React from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackReset: () => void;
}

export default function FeedbackContentStep({
  feedbackType,
  onFeedbackReset,
}: FeedbackContentStepProps) {
  const feedbackTypeData = feedbackTypes[feedbackType];
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
      <form className="my-4 w-full">
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
        />
      <footer className=" flex gap-2 mt-1">
        <button
          type="button"
          className="p-2
             bg-zinc-800
              border-transparent
               hover:bg-zinc-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-zinc-900
                focus:ring-brand-500"
        >
          <Camera className="h-6 w-6 text-zinc-100" />
        </button>
        <button
          type="submit"
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
                "
        >
          Enviar Feedback
        </button>
      </footer>
      </form>
    </React.Fragment>
  );
}
