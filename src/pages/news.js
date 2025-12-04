import React from "react";
import Layout from "@theme/Layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NewsSection } from "../components/NewsSection";

const theme = createTheme({});

export default function NewsPage() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout title="Tech News" description="Latest updates in technology">
        <NewsSection />
      </Layout>
    </MantineProvider>
  );
}
