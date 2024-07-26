"use client";

import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4 flex justify-between items-center p-8">
      <a
        className={`mr-4 ${pathname === "/" ? "text-black border-b" : ""}`}
        href="/"
      >
        🏴‍☠️ Chat
      </a>
      <a
        className={`mr-4 ${
          pathname === "/structured_output" ? "text-black border-b" : ""
        }`}
        href="/structured_output"
      >
        🧱 Structured Output
      </a>
      <a
        className={`mr-4 ${
          pathname === "/agents" ? "text-black border-b" : ""
        }`}
        href="/agents"
      >
        🦜 Agents
      </a>
      <a
        className={`mr-4 ${
          pathname === "/retrieval" ? "text-black border-b" : ""
        }`}
        href="/retrieval"
      >
        🐶 Retrieval
      </a>
      <a
        className={`mr-4 ${
          pathname === "/retrieval_agents" ? "text-black border-b" : ""
        }`}
        href="/retrieval_agents"
      >
        🤖 Retrieval Agents
      </a>
      {/* <a className={`mr-4 ${pathname === "/ai_sdk" ? "text-black border-b" : ""}`} href="/ai_sdk">🌊 LangChain x AI SDK</a> */}
      <a
        className={`mr-4 ${
          pathname === "/generative_ui" ? "text-black border-b" : ""
        }`}
        href="/generative_ui"
      >
        ✨ Generative UI
      </a>
    </nav>
  );
}
