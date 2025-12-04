import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { IdeasSection } from "../components/IdeasSection";

const theme = createTheme({});

export default function InnovationPage() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout title="Innovation Hub" description="Propose and track innovative ideas">
        <IdeasSection />
      </Layout>
    </MantineProvider>
  );
}
