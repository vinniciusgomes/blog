import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AIChat = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="w-9 h-9">
        <AvatarImage
          src="https://www.logoai.com/img/icon-styles/e.png"
          alt="@A.I"
        />
        <AvatarFallback className="bg-muted-foreground">A.I</AvatarFallback>
      </Avatar>

      <span className="font-semibold">A.I</span>
    </div>
  );
};

export { AIChat };
