import { Button, Center, Container, Group, Text } from "@mantine/core";
import classes from "./styles.module.css";
import React from "react";
import { IconLibrary, IconRocket } from "@tabler/icons-react";

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container maxSize={"400px"} className={classes.inner}>
        <h1 className={classes.title}>
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "indigo", to: "#674ad6" }}
            inherit
          >
            Knowledge Hub
          </Text>{" "}
          for Decskill Developers
        </h1>

        <Text className={classes.description} color="dimmed">
          Enhance your skills with Decskill’s detailed documentation, tools, and resources. Build, learn, and advance your technical expertise.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "indigo", to: "#674ad6" }}
            onClick={() => {
              open("", "_self");
            }}
          >
            <Center inline>
              <IconRocket size="32px" style={{ marginRight: "0.5rem" }} />
              Know more
            </Center>
          </Button>
          <Button
            size="xl"
            className={classes.control}
            variant="default"
            onClick={() => {
              open("docs/running-bracket/quickstart", "_self");
            }}
          >
            <Center inline>
              <IconLibrary size="32px" style={{ marginRight: "0.5rem" }} />
              Get started
            </Center>
          </Button>
        </Group>
      </Container>
    </div>
  );
}
