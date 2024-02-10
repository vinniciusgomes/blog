"use client";
import { AIChat } from "@/components/ai-chat";
import { Header } from "@/components/header";
import { MaxLengthSelector } from "@/components/max-length-selector";
import { ModelSelector } from "@/components/model-selector";
import { TemperatureSelector } from "@/components/temperature-selector";
import { TopPSelector } from "@/components/top-p-selector";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { UserChat } from "@/components/user-chat";

import { useChat } from "ai/react";
import { Wand } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [model, setModel] = useState("gpt-3.5-turbo");
  const [temperature, setTemperature] = useState([1]);
  const [maxLength, setMaxLength] = useState([256]);
  const [topP, setTopP] = useState([1]);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    body: {
      model,
      temperature: temperature[0],
      max_length: maxLength[0],
      top_p: topP[0],
    },
  });

  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-full flex-col md:flex">
        <Header />
        <Separator />
        <div className="mt-4 py-4 container h-full md:mt-6 md:py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div className="flex-col space-y-6 sm:flex md:order-2">
              <div className="grid gap-2">
                <span className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Settings
                </span>
              </div>
              <ModelSelector
                defaultValue={model}
                onValueChange={(model) => setModel(model)}
              />
              <TemperatureSelector
                defaultValue={temperature}
                value={temperature}
                onValueChange={(value) => setTemperature(value)}
              />
              <MaxLengthSelector
                defaultValue={maxLength}
                value={maxLength}
                onValueChange={(value) => setMaxLength(value)}
              />
              <TopPSelector
                defaultValue={topP}
                value={temperature}
                onValueChange={(value) => setTopP(value)}
              />
            </div>
            <div className="md:order-1">
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                  <Textarea
                    placeholder="Say something..."
                    className="h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px] p-4 resize-none"
                    onChange={handleInputChange}
                    value={input}
                  />
                  <ScrollArea className="rounded-md border bg-muted p-6 h-full max-h-[300px] lg:max-h-[700px] xl:max-h-[700px]">
                    <div className="flex flex-col gap-4">
                      {messages.map((m) => (
                        <div className="flex flex-col gap-2" key={m.id}>
                          {m.role === "user" ? (
                            <UserChat
                              avatar="https://github.com/vinniciusgomes.png"
                              username="vinniciusgomes"
                            />
                          ) : (
                            <AIChat />
                          )}

                          <span>{m.content}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                <div className="flex items-center space-x-2">
                  <Button type="submit">
                    Generate with A.I
                    <Wand size={16} className="ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
