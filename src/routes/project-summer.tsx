import { createFileRoute } from "@tanstack/react-router";
import ProjectSummer from "@/pages/ProjectSummer";

export const Route = createFileRoute("/project-summer")({
  head: () => ({
    meta: [
      { title: "Project Summer — Trio Boys" },
      { name: "description", content: "Day-by-day photos from the Trio Boys Project Summer." },
      { property: "og:title", content: "Project Summer — Trio Boys" },
      { property: "og:description", content: "Day-by-day photos from the Trio Boys Project Summer." },
    ],
  }),
  component: ProjectSummer,
});
