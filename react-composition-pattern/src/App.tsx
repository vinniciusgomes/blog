import { Bell, X, Check } from "lucide-react";

import { Notification } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <h1>React composition pattern</h1>
      <div className="notification-list">
        <Notification.Root>
          <Notification.Icon icon={Bell} />
          <Notification.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Notification.Content>
          <Notification.ActionsButton>
            <Notification.ActionButton onClick={() => console.log("cancel")}>
              <Notification.Icon icon={X} />
            </Notification.ActionButton>
            <Notification.ActionButton onClick={() => console.log("confirm")}>
              <Notification.Icon icon={Check} />
            </Notification.ActionButton>
          </Notification.ActionsButton>
        </Notification.Root>

        <Notification.Root>
          <Notification.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Notification.Content>
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Bell} />
          <Notification.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Notification.Content>
        </Notification.Root>
      </div>
    </>
  );
}

export default App;
