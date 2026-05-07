import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JS Frontend A3 Exam Prep",
    short_name: "Skill Tracker",
    description: "Track your JavaScript Frontend skills from A1 to A3",
    start_url: "/",
    display: "standalone",
    background_color: "#f9fafb",
    theme_color: "#ffffff",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon_js.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
