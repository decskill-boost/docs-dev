import React from "react";
import classes from "./styles.module.css";
import {
  IconArrowRight,
  IconBook2,
  IconBrandAws,
  IconBrandAzure,
  IconBrandDocker,
  IconBulb,
  IconCheck,
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
    description:
      "Comprehensive guides on clean code principles, design patterns, and coding standards adopted at Decskill.",
    link: "/docs-dev/docs/best-practices",
    linkText: "View Guidelines",
  },
  {
    icon: IconBulb,
    title: "Innovation Ideas",
    description:
      "A collaborative space to propose, discuss, and refine improvement ideas for your projects.",
    link: "/docs-dev/docs/innovation",
    linkText: "Submit Ideas",
  },
  {
    icon: IconMessage,
    title: "Discussion Forum",
    description:
      "Engage with fellow developers, share knowledge, and get answers from the Decskill community.",
    link: "/docs-dev/docs/forum",
    linkText: "Join Discussion",
  },
  {
    icon: IconNews,
    title: "Tech News",
    description:
      "Stay updated with the latest developments in cloud services, frameworks, and industry trends.",
    link: "/docs-dev/docs/news",
    linkText: "Read News",
  },
  {
    icon: IconShield,
    title: "Security Standards",
    description:
      "Essential security practices and guidelines to build robust and secure applications.",
    link: "/docs-dev/docs/security",
    linkText: "Learn More",
  },
  {
    icon: IconRocket,
    title: "Quick Start Guides",
    description:
      "Get up and running quickly with project templates and step-by-step setup instructions.",
    link: "/docs-dev/docs/quickstart",
    linkText: "Get Started",
  },
];

const cloudPlatforms = [
  { icon: IconBrandAws, name: "AWS" },
  { icon: IconBrandAzure, name: "Azure" },
  { icon: IconCloud, name: "Google Cloud" },
  { icon: IconBrandDocker, name: "Docker & K8s" },
];

export function FeaturesSection() {
  return (
    <section className={classes.section} id="features">
      <div className={classes.container}>
        {/* Section Header */}
        <div className={classes.header}>
          <span className={classes.sectionTag}>
            <IconBook2 size={16} />
            Resources
          </span>
          <h2 className={classes.sectionTitle}>
            Everything You Need to Excel
          </h2>
          <p className={classes.sectionSubtitle}>
            Access comprehensive documentation, best practices, and collaborative
            tools designed to accelerate your development journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className={classes.grid}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`${classes.card} ${index === 0 ? classes.cardHighlight : ""}`}
            >
              <div className={classes.cardContent}>
                <div className={classes.cardIcon}>
                  <feature.icon size={26} stroke={1.5} />
                </div>
                <h3 className={classes.cardTitle}>{feature.title}</h3>
                <p className={classes.cardDescription}>{feature.description}</p>
                <a href={feature.link} className={classes.cardLink}>
                  {feature.linkText}
                  <IconArrowRight
                    size={16}
                    className={classes.cardLinkArrow}
                  />
                </a>
              </div>
            </div>
          ))}

          {/* Large Cloud Platforms Card */}
          <div className={`${classes.card} ${classes.cardLarge}`}>
            <div className={classes.cardLargeContent}>
              <div className={classes.cardIcon}>
                <IconCloud size={26} stroke={1.5} />
              </div>
              <h3 className={classes.cardTitle}>Cloud & Infrastructure</h3>
              <p className={classes.cardDescription}>
                Deep-dive documentation for major cloud platforms and
                containerization technologies. Deploy with confidence.
              </p>
              <a href="/docs-dev/docs/cloud" className={classes.cardLink}>
                Explore Cloud Docs
                <IconArrowRight size={16} className={classes.cardLinkArrow} />
              </a>
            </div>
            <div className={classes.cardLargeVisual}>
              {cloudPlatforms.map((platform) => (
                <div key={platform.name} className={classes.visualItem}>
                  <platform.icon
                    size={20}
                    className={classes.visualItemIcon}
                  />
                  {platform.name}
                  <IconCheck
                    size={16}
                    style={{ marginLeft: "auto", color: "#00c853" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
