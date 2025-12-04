import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ForumSection } from "../components/ForumSection";

const theme = createTheme({});

export default function ForumPage() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout title="Discussion Forum" description="Connect with fellow Decskill developers">
        <ForumSection />
      </Layout>
    </MantineProvider>
  );
}
