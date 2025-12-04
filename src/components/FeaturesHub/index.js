import React from "react";
import classes from "./styles.module.css";
import {
  IconArrowRight,
  IconBook2,
  IconBrandAws,
  IconBrandAzure,
  IconBrandDocker,
  IconBulb,
  IconCloud,
  IconCode,
  IconMessage,
  IconNews,
  IconRocket,
  IconShield,
  IconUsers,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconCode,
    title: "Best Practices",
    description: "Clean code principles, design patterns, and coding standards.",
    link: "/docs-dev/docs/best-practices",
    color: "#0066ff",
  },
  {
    icon: IconBulb,
    title: "Innovation Hub",
    description: "Propose ideas, vote on initiatives, and drive change.",
    link: "/docs-dev/docs/innovation",
    color: "#00c853",
  },
  {
    icon: IconUsers,
    title: "Community",
    description: "Connect, discuss, and learn from fellow developers.",
    link: "/docs-dev/docs/community",
    color: "#00d4ff",
  },
  {
    icon: IconCloud,
    title: "Cloud & DevOps",
    description: "AWS, Azure, GCP, Docker, and Kubernetes guides.",
    link: "/docs-dev/docs/cloud",
    color: "#ff9900",
  },
  {
    icon: IconShield,
    title: "Security",
    description: "Security best practices and vulnerability prevention.",
    link: "/docs-dev/docs/security",
    color: "#ff1744",
  },
  {
    icon: IconNews,
    title: "Tech News",
    description: "Latest updates in frameworks, cloud, and tools.",
    link: "/docs-dev/docs/news",
    color: "#ffab00",
  },
];

export function FeaturesHub() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.header}>
          <span className={classes.sectionTag}>
            <IconBook2 size={16} />
            Quick Access
          </span>
          <h2 className={classes.sectionTitle}>Explore the Hub</h2>
        </div>

        <div className={classes.grid}>
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.link}
              className={classes.card}
            >
              <div
                className={classes.cardIcon}
                style={{
                  background: `${feature.color}15`,
                  color: feature.color,
                }}
              >
                <feature.icon size={24} stroke={1.5} />
              </div>
              <div className={classes.cardContent}>
                <h3 className={classes.cardTitle}>{feature.title}</h3>
                <p className={classes.cardDescription}>{feature.description}</p>
              </div>
              <IconArrowRight size={18} className={classes.cardArrow} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
