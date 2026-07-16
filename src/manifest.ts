import { defineManifest } from "@absolutejs/manifest";
import { Type } from "@sinclair/typebox";

export const manifest = defineManifest()({
  contract: 2,
  identity: {
    name: "@absolutejs/agent-sandbox",
    category: "security",
    tagline: "Give agents narrow capabilities, never ambient authority.",
    description:
      "Deny-by-default, expiring capability grants and idempotent provider-neutral action adapters for HTTP, filesystem, process, and credential-safe agent actions.",
    docsUrl: "https://github.com/absolutejs/agent-sandbox",
    accent: "#ef4444",
  },
  settings: Type.Object({}),
  slots: {},
  implements: [],
  tools: {},
  wiring: [],
});
