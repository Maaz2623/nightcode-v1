import type { Command, CommandContext } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a new conversation",
    value: "/new",
  },
  {
    name: "exit",
    description: "Quit the application",
    value: "/exit",
    action: (ctx: CommandContext) => {
      ctx.exit();
    },
  },
];
