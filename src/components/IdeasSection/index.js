import React from "react";
import classes from "./styles.module.css";
import {
  IconArrowRight,
  IconBulb,
  IconCheck,
  IconClock,
  IconFlame,
  IconPlus,
  IconThumbUp,
  IconTrendingUp,
} from "@tabler/icons-react";

const ideas = [
  {
    id: 1,
    title: "AI-Powered Code Review Assistant",
    description: "Implement an AI assistant to automatically review PRs for bugs, security issues, and code style.",
    author: "Ana Costa",
    authorInitials: "AC",
    votes: 47,
    status: "review",
    trending: true,
  },
  {
    id: 2,
    title: "Unified Design System",
    description: "Create a shared component library with React components, design tokens, and documentation.",
    author: "Miguel Santos",
    authorInitials: "MS",
    votes: 38,
    status: "approved",
    trending: false,
  },
  {
    id: 3,
    title: "Developer Metrics Dashboard",
    description: "Build a dashboard showing build success rates, deployment frequency, and code coverage.",
    author: "Pedro Lima",
    authorInitials: "PL",
    votes: 31,
    status: "in-progress",
    trending: false,
  },
];

const getStatusConfig = (status) => {
  switch (status) {
    case "review":
      return { label: "Under Review", color: "#ffab00", icon: IconClock };
    case "approved":
      return { label: "Approved", color: "#00c853", icon: IconCheck };
    case "in-progress":
      return { label: "In Progress", color: "#0066ff", icon: IconTrendingUp };
    default:
      return { label: "Draft", color: "#627d98", icon: IconClock };
  }
};

export function IdeasSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* Header */}
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            <span className={classes.sectionTag}>
              <IconBulb size={16} />
              Innovation Hub
            </span>
            <h2 className={classes.sectionTitle}>Shape the Future</h2>
            <p className={classes.sectionSubtitle}>
              Your ideas drive our evolution. Propose improvements, vote on initiatives, and help build a better development experience.
            </p>
          </div>
          <a href="/docs-dev/innovation" className={classes.submitButton}>
            <IconPlus size={18} />
            Submit Idea
          </a>
        </div>

        {/* Ideas Grid */}
        <div className={classes.grid}>
          {ideas.map((idea) => {
            const statusConfig = getStatusConfig(idea.status);
            const StatusIcon = statusConfig.icon;

            return (
              <div key={idea.id} className={classes.card}>
                {idea.trending && (
                  <div className={classes.trendingBadge}>
                    <IconFlame size={12} />
                    Trending
                  </div>
                )}

                <div className={classes.cardHeader}>
                  <span
                    className={classes.statusBadge}
                    style={{ color: statusConfig.color }}
                  >
                    <StatusIcon size={12} />
                    {statusConfig.label}
                  </span>
                </div>

                <h3 className={classes.cardTitle}>{idea.title}</h3>
                <p className={classes.cardDescription}>{idea.description}</p>

                <div className={classes.cardFooter}>
                  <div className={classes.author}>
                    <div className={classes.authorAvatar}>{idea.authorInitials}</div>
                    <span className={classes.authorName}>{idea.author}</span>
                  </div>
                  <div className={classes.votes}>
                    <IconThumbUp size={14} />
                    {idea.votes}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className={classes.footer}>
          <a href="/docs-dev/innovation" className={classes.viewAllLink}>
            View All Ideas
            <IconArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
