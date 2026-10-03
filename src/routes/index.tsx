import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trio Boys — Videos, Merch & Community" },
      { name: "description", content: "The official home of Trio Boys: latest videos, merch drops, Project Summer and the community." },
      { property: "og:title", content: "Trio Boys — Videos, Merch & Community" },
      { property: "og:description", content: "The official home of Trio Boys: latest videos, merch drops, Project Summer and the community." },
    ],
  }),
  component: Home,
});
