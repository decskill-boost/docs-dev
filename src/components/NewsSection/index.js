import React from "react";
import classes from "./styles.module.css";
import {
  IconArrowRight,
  IconBrandAws,
  IconBrandAzure,
  IconBrandDocker,
  IconBrandReact,
  IconCloud,
  IconHash,
  IconNews,
  IconRocket,
  IconShieldLock,
  IconSparkles,
} from "@tabler/icons-react";

const featuredNews = {
  id: 1,
  title: "AWS Announces New Serverless Features at re:Invent 2024",
  excerpt:
    "Amazon Web Services unveiled several new serverless capabilities including enhanced Lambda functions, improved Step Functions, and new EventBridge features that promise to simplify cloud-native development.",
  category: "cloud",
  categoryLabel: "Cloud",
  date: "Dec 3, 2024",
  readTime: "5 min read",
  icon: IconBrandAws,
};

const smallNews = [
  {
    id: 2,
    title: "React 19 Release Candidate Now Available",
    category: "framework",
    categoryLabel: "Framework",
    date: "Dec 2, 2024",
    icon: IconBrandReact,
  },
  {
    id: 3,
    title: "Docker Desktop 4.26 Brings AI-Powered Debugging",
    category: "tool",
    categoryLabel: "Tool",
    date: "Dec 1, 2024",
    icon: IconBrandDocker,
  },
  {
    id: 4,
    title: "Critical Security Update for Node.js v20",
    category: "security",
    categoryLabel: "Security",
    date: "Nov 30, 2024",
    icon: IconShieldLock,
  },
];

const tags = [
  { name: "AWS", icon: IconBrandAws },
  { name: "Azure", icon: IconBrandAzure },
  { name: "Docker", icon: IconBrandDocker },
  { name: "React", icon: IconBrandReact },
  { name: "Kubernetes", icon: IconCloud },
  { name: "DevOps", icon: IconRocket },
];

const getCategoryClass = (category) => {
  switch (category) {
    case "cloud":
      return classes.categoryCloud;
    case "framework":
      return classes.categoryFramework;
    case "tool":
      return classes.categoryTool;
    case "security":
      return classes.categorySecurity;
    default:
      return "";
  }
};

export function NewsSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* Header */}
        <div className={classes.header}>
          <div className={classes.headerContent}>
            <span className={classes.sectionTag}>
              <IconNews size={16} />
              Tech News
            </span>
            <h2 className={classes.sectionTitle}>Stay Informed</h2>
            <p className={classes.sectionSubtitle}>
              The latest updates from cloud providers, frameworks, and tools
              that matter for your projects.
            </p>
          </div>
          <a href="/docs-dev/news" className={classes.viewAllLink}>
            View All News
            <IconArrowRight size={16} />
          </a>
        </div>

        {/* News Grid */}
        <div className={classes.newsGrid}>
          {/* Featured Card */}
          <a href="/docs-dev/news" className={classes.featuredCard}>
            <div className={classes.featuredImageWrapper}>
              <div className={classes.featuredImage}>
                <featuredNews.icon
                  size={120}
                  stroke={1}
                  className={classes.featuredImageIcon}
                />
              </div>
              <div className={classes.featuredBadge}>
                <IconSparkles size={12} />
                Featured
              </div>
            </div>
            <div className={classes.featuredContent}>
              <span
                className={`${classes.newsCategory} ${getCategoryClass(
                  featuredNews.category
                )}`}
              >
                {featuredNews.categoryLabel}
              </span>
              <h3 className={classes.newsTitle}>{featuredNews.title}</h3>
              <p className={classes.newsExcerpt}>{featuredNews.excerpt}</p>
              <div className={classes.newsMeta}>
                <span>{featuredNews.date}</span>
                <span className={classes.metaSeparator} />
                <span>{featuredNews.readTime}</span>
              </div>
            </div>
          </a>

          {/* Small Cards */}
          <div className={classes.smallCardsWrapper}>
            {smallNews.map((news) => (
              <a
                key={news.id}
                href="/docs-dev/news"
                className={classes.smallCard}
              >
                <div className={classes.smallCardIcon}>
                  <news.icon size={24} stroke={1.5} />
                </div>
                <div className={classes.smallCardContent}>
                  <span
                    className={`${classes.newsCategory} ${getCategoryClass(
                      news.category
                    )}`}
                  >
                    {news.categoryLabel}
                  </span>
                  <h4 className={classes.smallCardTitle}>{news.title}</h4>
                  <div className={classes.smallCardMeta}>
                    <span>{news.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div className={classes.tagsSection}>
          <div className={classes.tagsLabel}>Popular Topics</div>
          <div className={classes.tagsRow}>
            {tags.map((tag) => (
              <a
                key={tag.name}
                href="/docs-dev/news"
                className={classes.tag}
              >
                <tag.icon size={14} className={classes.tagIcon} />
                {tag.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
