import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent } from "@/components/ui/card";

export default function Intro() {
  return (
    <div className="flex px-8 w-full mb-12  flex-col items-center">
      <Tabs defaultValue="About Me" className="w-[600px] min-h-[300px] ">
        <TabsList className="w-full p-10 ">
          <TabsTrigger className="text-left text-[25px]" value="About Me">
            About Me
          </TabsTrigger>
          <TabsTrigger
            className="text-left text-[25px]"
            value="Suggested Integration"
          >
            Suggested Integration
          </TabsTrigger>
        </TabsList>
        <TabsContent value="About Me">
          <Card>
            <CardContent>
              <p className="text-md text-center">
                Hello 🤝 promade! I&apos;m Bolaji, a seasoned Full Stack
                Engineer with a robust background in AI and backend development.
                I specialize in integrating cutting-edge technologies to build
                powerful and scalable solutions.
              </p>
            </CardContent>
            <CardContent>
              <p className="text-md text-center">
                I have extensive experience with OpenAI integration and
                LangChain, which I leverage to deliver innovative AI solutions.
                My skills include: OpenAI Integration: Seamlessly incorporating
                OpenAI's powerful models into various applications. LangChain:
                Utilizing LangChain for efficient and effective natural language
                processing tasks.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Suggested Integration">
          <Card>
            <CardContent>
              <p className="text-md text-center">
                I noticed the integration with Amazon Textract in your projects.
                However, I recommend considering LangChain’s document loaders.
                These loaders work harmoniously with OpenAI and can streamline
                your document processing setup. Feel free to explore the
                retrieval tab below to upload and test documents with this
                integration.
              </p>
            </CardContent>
            <CardContent>
              <p className="text-md text-center">
                I’d love to discuss how my skills and experience can add value
                to your team. You can{" "}
                <a className="text-red-900 font-semibold" href="/Bada-Mobolaji.pdf" download>
                  Download my Resume
                </a>{" "}
                and I’m looking forward to a productive conversation.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <p className="my-10">
        {" "}
        Click on the tabs(🏴‍☠️ Chat, 🧱 Structured Output, 🦜 Agents, 🐶
        Retrieval, 🤖 Retrieval Agents, ✨ Generative UI) below.
      </p>
      <p className="mb-10">
        {" "}
        Best viewed on large screens. N.B this is a dummy project i built for
        promade with my openapi-keys, So kindly use with caution cause of cost.
      </p>
    </div>
  );
}
