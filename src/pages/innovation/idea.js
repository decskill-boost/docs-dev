import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { IdeaDetailPage } from "../../components/IdeaDetailPage";

const theme = createTheme({
  fontFamily: "'IBM Plex Sans', sans-serif",
  headings: {
    fontFamily: "'Sora', sans-serif",
  },
});

export default function IdeaDetail() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout title="Idea Details" description="View and discuss this innovation idea">
        <IdeaDetailPage />
      </Layout>
    </MantineProvider>
  );
}
