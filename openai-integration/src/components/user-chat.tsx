import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type UserChatProps = {
  username: string;
  avatar: string;
};

const UserChat = ({ avatar, username }: UserChatProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="w-9 h-9">
        <AvatarImage src={avatar} alt={`@${username}`} />
        <AvatarFallback className="bg-muted-foreground">
          {username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <span className="font-semibold">Você</span>
    </div>
  );
};

export { UserChat };
