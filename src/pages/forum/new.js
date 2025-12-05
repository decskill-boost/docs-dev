import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NewDiscussionPage } from "../../components/NewDiscussionPage";

const theme = createTheme({
  fontFamily: "'IBM Plex Sans', sans-serif",
  headings: {
    fontFamily: "'Sora', sans-serif",
  },
});

export default function NewDiscussion() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout title="New Discussion" description="Start a new discussion with the community">
        <NewDiscussionPage />
      </Layout>
    </MantineProvider>
  );
}
