// Alert.stories.js
import React from "react";

import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    type: {
      control: "select",
      defaultValue: "default",
      options: ["default", "info", "success", "danger", "warning"],
    },
  },
};

export const Default = (args) => <Alert {...args} />;
Default.args = {
  title: "Alert example",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum neque est, at laoreet dolor bibendum eu.",
};

export const Info = (args) => <Alert {...args} />;
Info.args = {
  title: "Alert example",
  type: "info",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum neque est, at laoreet dolor bibendum eu.",
};

export const Success = (args) => <Alert {...args} />;
Success.args = {
  title: "Alert example",
  type: "success",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum neque est, at laoreet dolor bibendum eu.",
};

export const Danger = (args) => <Alert {...args} />;
Danger.args = {
  title: "Alert example",
  type: "danger",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum neque est, at laoreet dolor bibendum eu.",
};

export const Warning = (args) => <Alert {...args} />;
Warning.args = {
  title: "Alert example",
  type: "warning",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum neque est, at laoreet dolor bibendum eu.",
};
