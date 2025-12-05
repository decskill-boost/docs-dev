import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { IdeasPage } from "../components/IdeasPage";

const theme = createTheme({
  fontFamily: "'IBM Plex Sans', sans-serif",
  headings: {
    fontFamily: "'Sora', sans-serif",
  },
});

export default function InnovationPage() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout title="Innovation Hub" description="Propose and track innovative ideas">
        <IdeasPage />
      </Layout>
    </MantineProvider>
  );
}
