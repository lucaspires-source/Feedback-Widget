import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

export function Widget() {
  const [isWidgetOpen, setWidgetOpen] = useState(false);

  function toggleWidgetVisibility() {
    setWidgetOpen(!isWidgetOpen);
  }
  return (
    <div className="absolute bottom-5 right-5">
      {isWidgetOpen && <p>Hello, I am the Widget</p>}
      <button
        onClick={toggleWidgetVisibility}
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
          <span className="pl-2" />
          Feedback
        </span>
      </button>
    </div>
  );
}
