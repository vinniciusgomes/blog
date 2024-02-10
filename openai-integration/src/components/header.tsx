import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <h2 className="text-lg font-semibold">A.I Integration</h2>

      <div className="flex items-center gap-4">
        <Button variant="link" size="sm" asChild>
          <a
            href="https://platform.openai.com/docs/api-reference"
            target="_blank"
          >
            API documentation
          </a>
        </Button>
        <Button size="sm">
          <a
            href="https://github.com/vinniciusgomes/blog/openai-integration"
            target="_blank"
            className="flex items-center"
          >
            View on GitHub <GithubIcon size={18} className="ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export { Header };
