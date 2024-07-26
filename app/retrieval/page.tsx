import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden text-white">
      <h1 className="text-3xl md:text-4xl mb-4">
        LangChain.js Retrieval Chain 🦜🔗
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          🔗
          <span className="ml-2">
            This template showcases how to perform retrieval with{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain i am showing for pdf files. Guess this is what promade is looking for
            </a>{" "}
  
          </span>
        </li>
        <li className="hidden text-l md:block">
          🪜
          <span className="ml-2">The chain works in two steps:</span>
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">
                First, add a pdf document, CLICK UPLOAD, wait for it to be loaded then query the document for answers.
              </span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">
                Then, it queries the retriever for documents similar to the
                dereferenced question and composes an answer.
              </span>
            </li>
          </ul>
        </li>

        <li className="text-l">
          👇
          <span className="ml-2">Upload a pdf file</span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'I\'ve got a nose for finding the right documents! Just Ask, ""'
      }
      emoji="🐶"
      titleText="Dana the Document-Retrieving Dog"
    ></ChatWindow>
  );
}
