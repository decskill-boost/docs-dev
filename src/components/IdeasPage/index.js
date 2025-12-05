import React, { useState } from "react";
import classes from "./styles.module.css";
import {
  IconArrowRight,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconFilter,
  IconFlame,
  IconHeart,
  IconLayoutGrid,
  IconLayoutList,
  IconPlus,
  IconRocket,
  IconSearch,
  IconSortDescending,
  IconSparkles,
  IconThumbUp,
  IconTrendingUp,
  IconX,
} from "@tabler/icons-react";

const allIdeas = [
  {
    id: 1,
    title: "AI-Powered Code Review Assistant",
    description:
      "Implement an AI assistant to automatically review PRs for bugs, security issues, and code style. This could integrate with our existing GitHub workflows and provide immediate feedback to developers.",
    author: "Ana Costa",
    authorInitials: "AC",
    authorRole: "Tech Lead",
    votes: 47,
    status: "review",
    trending: true,
    comments: 23,
    createdAt: "2 days ago",
    tags: ["AI", "Automation", "DevOps"],
    impact: "high",
  },
  {
    id: 2,
    title: "Unified Design System",
    description:
      "Create a shared component library with React components, design tokens, and documentation. This will ensure consistency across all our projects and speed up development.",
    author: "Miguel Santos",
    authorInitials: "MS",
    authorRole: "Senior Developer",
    votes: 38,
    status: "approved",
    trending: false,
    comments: 18,
    createdAt: "1 week ago",
    tags: ["Design", "React", "Components"],
    impact: "high",
  },
  {
    id: 3,
    title: "Developer Metrics Dashboard",
    description:
      "Build a dashboard showing build success rates, deployment frequency, code coverage, and other key metrics. Help teams track their performance and identify areas for improvement.",
    author: "Pedro Lima",
    authorInitials: "PL",
    authorRole: "DevOps Engineer",
    votes: 31,
    status: "in-progress",
    trending: false,
    comments: 15,
    createdAt: "2 weeks ago",
    tags: ["Analytics", "Dashboard", "DevOps"],
    impact: "medium",
  },
  {
    id: 4,
    title: "Internal Knowledge Base with AI Search",
    description:
      "Create a centralized knowledge base with semantic search powered by AI. Allow developers to quickly find documentation, best practices, and previous solutions.",
    author: "Sofia Martins",
    authorInitials: "SM",
    authorRole: "Frontend Developer",
    votes: 29,
    status: "review",
    trending: true,
    comments: 12,
    createdAt: "3 days ago",
    tags: ["AI", "Documentation", "Search"],
    impact: "high",
  },
  {
    id: 5,
    title: "Automated Testing Infrastructure",
    description:
      "Set up a comprehensive testing infrastructure with E2E testing, visual regression tests, and performance benchmarks. Integrate with CI/CD for automatic quality gates.",
    author: "João Ferreira",
    authorInitials: "JF",
    authorRole: "QA Engineer",
    votes: 26,
    status: "approved",
    trending: false,
    comments: 9,
    createdAt: "1 week ago",
    tags: ["Testing", "CI/CD", "Quality"],
    impact: "high",
  },
  {
    id: 6,
    title: "Developer Onboarding Platform",
    description:
      "Build an interactive onboarding platform for new developers. Include tutorials, environment setup guides, and project-specific documentation all in one place.",
    author: "Rita Oliveira",
    authorInitials: "RO",
    authorRole: "HR Tech Partner",
    votes: 24,
    status: "draft",
    trending: false,
    comments: 7,
    createdAt: "5 days ago",
    tags: ["Onboarding", "Documentation", "Training"],
    impact: "medium",
  },
  {
    id: 7,
    title: "Microservices Template Generator",
    description:
      "Create a CLI tool that generates microservice boilerplate with our best practices baked in. Include logging, monitoring, authentication, and database setup.",
    author: "Carlos Mendes",
    authorInitials: "CM",
    authorRole: "Backend Developer",
    votes: 22,
    status: "in-progress",
    trending: false,
    comments: 14,
    createdAt: "2 weeks ago",
    tags: ["Microservices", "CLI", "Templates"],
    impact: "medium",
  },
  {
    id: 8,
    title: "Real-time Collaboration Tools",
    description:
      "Implement real-time collaboration features for code reviews and pair programming. Think Google Docs-style collaboration but for code.",
    author: "Bruno Alves",
    authorInitials: "BA",
    authorRole: "Senior Developer",
    votes: 19,
    status: "review",
    trending: false,
    comments: 8,
    createdAt: "4 days ago",
    tags: ["Collaboration", "Real-time", "Productivity"],
    impact: "medium",
  },
];

const statusConfig = {
  draft: { label: "Draft", color: "#627d98", icon: IconClock, bgColor: "rgba(98, 125, 152, 0.15)" },
  review: { label: "Under Review", color: "#ffab00", icon: IconClock, bgColor: "rgba(255, 171, 0, 0.15)" },
  approved: { label: "Approved", color: "#00c853", icon: IconCheck, bgColor: "rgba(0, 200, 83, 0.15)" },
  "in-progress": { label: "In Progress", color: "#0066ff", icon: IconTrendingUp, bgColor: "rgba(0, 102, 255, 0.15)" },
  completed: { label: "Completed", color: "#00d4ff", icon: IconRocket, bgColor: "rgba(0, 212, 255, 0.15)" },
};

const impactConfig = {
  low: { label: "Low Impact", color: "#627d98" },
  medium: { label: "Medium Impact", color: "#ffab00" },
  high: { label: "High Impact", color: "#00c853" },
};

const statusFilters = [
  { id: "all", label: "All Ideas" },
  { id: "draft", label: "Draft" },
  { id: "review", label: "Under Review" },
  { id: "approved", label: "Approved" },
  { id: "in-progress", label: "In Progress" },
];

const sortOptions = [
  { id: "votes", label: "Most Votes" },
  { id: "recent", label: "Most Recent" },
  { id: "comments", label: "Most Discussed" },
  { id: "trending", label: "Trending" },
];

export function IdeasPage() {
  const [activeStatus, setActiveStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("votes");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const filteredIdeas = allIdeas.filter((idea) => {
    if (activeStatus !== "all" && idea.status !== activeStatus) return false;
    if (searchQuery && !idea.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <section className={classes.page}>
      {/* Decorative Background */}
      <div className={classes.backgroundDecor}>
        <div className={classes.gradientOrb1} />
        <div className={classes.gradientOrb2} />
        <div className={classes.floatingShapes}>
          <div className={classes.shape1} />
          <div className={classes.shape2} />
          <div className={classes.shape3} />
        </div>
      </div>

      <div className={classes.container}>
        {/* Hero Header */}
        <header className={classes.heroHeader}>
          <div className={classes.heroContent}>
            <span className={classes.heroTag}>
              <IconBulb size={16} />
              Innovation Hub
            </span>
            <h1 className={classes.heroTitle}>
              Shape the <span className={classes.heroTitleAccent}>Future</span>
            </h1>
            <p className={classes.heroSubtitle}>
              Your ideas drive our evolution. Propose improvements, vote on initiatives,
              and help build a better development experience for everyone.
            </p>
          </div>

          <div className={classes.heroActions}>
            <a href="/docs-dev/innovation/submit" className={classes.submitButton}>
              <IconPlus size={18} />
              Submit New Idea
            </a>
          </div>
        </header>

        {/* Stats Overview */}
        <div className={classes.statsOverview}>
          <div className={classes.statBox}>
            <div className={classes.statBoxIcon} style={{ background: "rgba(0, 200, 83, 0.15)" }}>
              <IconBulb size={22} style={{ color: "#00c853" }} />
            </div>
            <div className={classes.statBoxContent}>
              <span className={classes.statBoxValue}>127</span>
              <span className={classes.statBoxLabel}>Total Ideas</span>
            </div>
          </div>
          <div className={classes.statBox}>
            <div className={classes.statBoxIcon} style={{ background: "rgba(255, 171, 0, 0.15)" }}>
              <IconClock size={22} style={{ color: "#ffab00" }} />
            </div>
            <div className={classes.statBoxContent}>
              <span className={classes.statBoxValue}>34</span>
              <span className={classes.statBoxLabel}>Under Review</span>
            </div>
          </div>
          <div className={classes.statBox}>
            <div className={classes.statBoxIcon} style={{ background: "rgba(0, 102, 255, 0.15)" }}>
              <IconTrendingUp size={22} style={{ color: "#0066ff" }} />
            </div>
            <div className={classes.statBoxContent}>
              <span className={classes.statBoxValue}>18</span>
              <span className={classes.statBoxLabel}>In Progress</span>
            </div>
          </div>
          <div className={classes.statBox}>
            <div className={classes.statBoxIcon} style={{ background: "rgba(0, 212, 255, 0.15)" }}>
              <IconRocket size={22} style={{ color: "#00d4ff" }} />
            </div>
            <div className={classes.statBoxContent}>
              <span className={classes.statBoxValue}>42</span>
              <span className={classes.statBoxLabel}>Implemented</span>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className={classes.filtersBar}>
          <div className={classes.statusTabs}>
            {statusFilters.map((filter) => (
              <button
                key={filter.id}
                className={`${classes.statusTab} ${
                  activeStatus === filter.id ? classes.statusTabActive : ""
                }`}
                onClick={() => setActiveStatus(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={classes.filtersRight}>
            <div className={classes.searchWrapper}>
              <IconSearch size={16} className={classes.searchIcon} />
              <input
                type="text"
                placeholder="Search ideas..."
                className={classes.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className={classes.clearSearch}
                  onClick={() => setSearchQuery("")}
                >
                  <IconX size={14} />
                </button>
              )}
            </div>

            <div className={classes.sortWrapper}>
              <button
                className={classes.sortButton}
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                <IconSortDescending size={16} />
                {sortOptions.find((s) => s.id === sortBy)?.label}
                <IconChevronDown size={14} />
              </button>
              {showSortDropdown && (
                <div className={classes.dropdownMenu}>
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      className={`${classes.dropdownItem} ${
                        sortBy === option.id ? classes.dropdownItemActive : ""
                      }`}
                      onClick={() => {
                        setSortBy(option.id);
                        setShowSortDropdown(false);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={classes.viewToggle}>
              <button
                className={`${classes.viewButton} ${
                  viewMode === "grid" ? classes.viewButtonActive : ""
                }`}
                onClick={() => setViewMode("grid")}
              >
                <IconLayoutGrid size={16} />
              </button>
              <button
                className={`${classes.viewButton} ${
                  viewMode === "list" ? classes.viewButtonActive : ""
                }`}
                onClick={() => setViewMode("list")}
              >
                <IconLayoutList size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Ideas Grid/List */}
        <div className={viewMode === "grid" ? classes.ideasGrid : classes.ideasList}>
          {filteredIdeas.map((idea) => {
            const status = statusConfig[idea.status];
            const StatusIcon = status.icon;
            const impact = impactConfig[idea.impact];

            return (
              <article
                key={idea.id}
                className={`${classes.ideaCard} ${
                  viewMode === "list" ? classes.ideaCardList : ""
                }`}
              >
                {/* Trending Badge */}
                {idea.trending && (
                  <div className={classes.trendingBadge}>
                    <IconFlame size={12} />
                    Trending
                  </div>
                )}

                {/* Card Header */}
                <div className={classes.cardHeader}>
                  <span
                    className={classes.statusBadge}
                    style={{ background: status.bgColor, color: status.color }}
                  >
                    <StatusIcon size={12} />
                    {status.label}
                  </span>
                  <span
                    className={classes.impactBadge}
                    style={{ color: impact.color }}
                  >
                    {impact.label}
                  </span>
                </div>

                {/* Title & Description */}
                <a href="/docs-dev/innovation/idea" className={classes.cardLink}>
                  <h3 className={classes.cardTitle}>{idea.title}</h3>
                </a>
                <p className={classes.cardDescription}>{idea.description}</p>

                {/* Tags */}
                <div className={classes.cardTags}>
                  {idea.tags.map((tag) => (
                    <span key={tag} className={classes.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className={classes.cardFooter}>
                  <div className={classes.authorSection}>
                    <div className={classes.authorAvatar}>{idea.authorInitials}</div>
                    <div className={classes.authorInfo}>
                      <span className={classes.authorName}>{idea.author}</span>
                      <span className={classes.authorMeta}>{idea.createdAt}</span>
                    </div>
                  </div>

                  <div className={classes.cardActions}>
                    <button className={classes.voteButton}>
                      <IconThumbUp size={16} />
                      <span>{idea.votes}</span>
                    </button>
                    <span className={classes.commentCount}>
                      {idea.comments} comments
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        <div className={classes.pagination}>
          <button className={classes.paginationButton} disabled>
            <IconChevronLeft size={16} />
            Previous
          </button>
          <div className={classes.paginationInfo}>
            Showing <strong>1-8</strong> of <strong>127</strong> ideas
          </div>
          <button className={classes.paginationButton}>
            Next
            <IconChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
