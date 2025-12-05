import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { DiscussionDetailPage } from "../../components/DiscussionDetailPage";

const theme = createTheme({
  fontFamily: "'IBM Plex Sans', sans-serif",
  headings: {
    fontFamily: "'Sora', sans-serif",
  },
});

export default function DiscussionDetail() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout title="Discussion" description="View and participate in this discussion">
        <DiscussionDetailPage />
      </Layout>
    </MantineProvider>
  );
}
