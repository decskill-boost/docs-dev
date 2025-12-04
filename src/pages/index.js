import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { HeroTitle } from "../components/HeroTitle";
import { FeaturesSection } from "../components/FeaturesSection";
import { ForumSection } from "../components/ForumSection";
import { IdeasSection } from "../components/IdeasSection";
import { NewsSection } from "../components/NewsSection";
import classes from "./index.module.css";
import {
  IconBrandGithub,
  IconRocket,
} from "@tabler/icons-react";

const theme = createTheme({
  fontFamily: "'IBM Plex Sans', sans-serif",
  headings: {
    fontFamily: "'Sora', sans-serif",
  },
});

function CTASection() {
  return (
    <section className={classes.ctaSection}>
      <div className={classes.ctaContainer}>
        <h2 className={classes.ctaTitle}>
          Ready to Start Building?
        </h2>
        <p className={classes.ctaSubtitle}>
          Explore our comprehensive documentation and join the Decskill
          developer community today.
        </p>
        <div className={classes.ctaButtons}>
          <a href="/docs-dev/docs/intro" className={classes.ctaPrimary}>
            <IconRocket size={18} />
            Get Started
          </a>
          <a
            href="https://github.com/decskill-boost"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.ctaSecondary}
          >
            <IconBrandGithub size={18} />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout
        title="Decskill Hub - Developer Knowledge Center"
        description="Your central hub for development best practices, innovation ideas, technical discussions, and the latest news in cloud and technology."
      >
        <div className={classes.pageWrapper}>
          <HeroTitle />
          <main>
            <FeaturesSection />
            <IdeasSection />
            <ForumSection />
            <NewsSection />
            <CTASection />
          </main>
        </div>
      </Layout>
    </MantineProvider>
  );
}
