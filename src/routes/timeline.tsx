import { createFileRoute } from "@tanstack/react-router";
import Timeline from "@/pages/Timeline";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — Trio Boys" },
      { name: "description", content: "The story of Trio Boys, from the first video to now." },
      { property: "og:title", content: "Timeline — Trio Boys" },
      { property: "og:description", content: "The story of Trio Boys, from the first video to now." },
    ],
  }),
  component: Timeline,
});
