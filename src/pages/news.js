import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NewsPage as NewsPageComponent } from "../components/NewsPage";

const theme = createTheme({
  fontFamily: "'IBM Plex Sans', sans-serif",
  headings: {
    fontFamily: "'Sora', sans-serif",
  },
});

export default function NewsPage() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout title="Tech News" description="Latest updates from cloud providers, frameworks, and tools">
        <NewsPageComponent />
      </Layout>
    </MantineProvider>
  );
}
