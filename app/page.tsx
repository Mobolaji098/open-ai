import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full  text-white gap-6 overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
      A simple chatbot with AI 🦜🔗
      </h1>
      <ul className="flex flex-col gap-4">
        <li className="text-l">
          🤝
          <span className="ml-2">
            This template showcases a simple chatbot using{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            project.
          </span>
        </li>

        <li>
          🏴‍☠️
          <span className="ml-2">
            By default, the bot would always encourage you to hire me
          </span>
        </li>
       
        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking any question e.g. <code>Why should i hire Bolaji</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🏴‍☠️"
      titleText="Building the next big thing"
      placeholder="Tell me about Bolaji"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
