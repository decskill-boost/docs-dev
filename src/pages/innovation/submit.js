import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { SubmitIdeaPage } from "../../components/SubmitIdeaPage";

const theme = createTheme({
  fontFamily: "'IBM Plex Sans', sans-serif",
  headings: {
    fontFamily: "'Sora', sans-serif",
  },
});

export default function SubmitIdea() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout title="Submit New Idea" description="Share your innovation idea with the team">
        <SubmitIdeaPage />
      </Layout>
    </MantineProvider>
  );
}
