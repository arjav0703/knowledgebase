import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Knowledgebase",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          // Gruvbox Light palette
          light: "#fbf1c7",        // Background
          lightgray: "#ebdbb2",     // Lighter background
          gray: "#d5c4a1",          // Subtle elements
          darkgray: "#bdae93",      // Secondary element shadows
          dark: "#3c3836",          // Foreground/Text
          secondary: "#98971a",     // Accent (green)
          tertiary: "#d79921",      // Accent (yellow)
          highlight: "rgba(250, 189, 47, 0.15)", // Highlight with transparency
          textHighlight: "#3c3836", // Text highlight color
        },
        darkMode: {
          // Gruvbox Dark palette
          light: "#282828",         // Background
          lightgray: "#3c3836",      // Slightly lighter background
          gray: "rgb(188, 238, 254)",           // Midtone element
          darkgray: "rgb(225, 221, 177)",       // Secondary elements
          dark: "#ebdbb2",           // Foreground/Text
          secondary: "rgb(200, 229, 255)",      // Accent (green)
          tertiary: "#d79921",       // Accent (yellow)
          highlight: "rgba(250, 189, 47, 0.15)", // Highlight with transparency
          textHighlight: "#ebdbb2",  // Text highlight color
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
