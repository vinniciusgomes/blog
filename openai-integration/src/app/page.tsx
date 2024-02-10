import { Header } from "@/components/header";
import { MaxLengthSelector } from "@/components/max-length-selector";
import { ModelSelector } from "@/components/model-selector";
import { TemperatureSelector } from "@/components/temperature-selector";
import { TopPSelector } from "@/components/top-p-selector";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="hidden h-full flex-col md:flex">
        <Header />
        <Separator />
        <div className="container h-full mt-6 py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div className="hidden flex-col space-y-6 sm:flex md:order-2">
              <div className="grid gap-2">
                <span className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Settings
                </span>
              </div>
              <ModelSelector />
              <TemperatureSelector defaultValue={[0.56]} />
              <MaxLengthSelector defaultValue={[256]} />
              <TopPSelector defaultValue={[0.9]} />
            </div>
            <div className="md:order-1">
              <div className="flex flex-col space-y-4">
                <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                  <Textarea
                    placeholder="Write something..."
                    className="h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]"
                  />
                  <div className="rounded-md border bg-muted"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button>Generate</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
