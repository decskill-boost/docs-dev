import React, { useState } from "react";
import classes from "./styles.module.css";
import {
  IconArrowRight,
  IconBookmark,
  IconBrandAws,
  IconBrandAzure,
  IconBrandDocker,
  IconBrandReact,
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconCloud,
  IconCode,
  IconExternalLink,
  IconNews,
  IconRocket,
  IconSearch,
  IconShare,
  IconShieldLock,
  IconSparkles,
  IconTag,
  IconTrendingUp,
} from "@tabler/icons-react";

const featuredArticle = {
  id: 1,
  title: "AWS Announces Revolutionary Serverless Features at re:Invent 2024",
  excerpt:
    "Amazon Web Services unveiled several groundbreaking serverless capabilities including enhanced Lambda functions with 10x faster cold starts, improved Step Functions with visual workflow debugging, and new EventBridge features that promise to simplify cloud-native development for enterprises worldwide.",
  category: "cloud",
  categoryLabel: "Cloud Computing",
  author: "Sarah Chen",
  authorRole: "Cloud Correspondent",
  date: "Dec 3, 2024",
  readTime: "8 min read",
  image: "aws",
  icon: IconBrandAws,
  featured: true,
};

const topStories = [
  {
    id: 2,
    title: "React 19 Release Candidate Introduces Groundbreaking Concurrent Features",
    excerpt:
      "The latest React release candidate brings major improvements to concurrent rendering, automatic batching, and introduces the new use() hook.",
    category: "framework",
    categoryLabel: "Framework",
    author: "Alex Rivera",
    date: "Dec 2, 2024",
    readTime: "6 min read",
    icon: IconBrandReact,
  },
  {
    id: 3,
    title: "Docker Desktop 4.26 Revolutionizes Development with AI-Powered Debugging",
    excerpt:
      "New AI features help developers identify and fix container issues faster than ever before.",
    category: "tool",
    categoryLabel: "DevOps Tool",
    author: "Marcus Johnson",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    icon: IconBrandDocker,
  },
  {
    id: 4,
    title: "Critical Security Vulnerability Patched in Node.js v20 LTS",
    excerpt:
      "A high-severity security update addresses remote code execution vulnerability affecting millions.",
    category: "security",
    categoryLabel: "Security",
    author: "Emma Williams",
    date: "Nov 30, 2024",
    readTime: "4 min read",
    icon: IconShieldLock,
  },
];

const latestNews = [
  {
    id: 5,
    title: "Azure Introduces Enhanced Kubernetes Service with Auto-Scaling AI",
    category: "cloud",
    categoryLabel: "Cloud",
    date: "Nov 29, 2024",
    readTime: "5 min",
    icon: IconBrandAzure,
  },
  {
    id: 6,
    title: "TypeScript 5.4 Beta Brings Improved Type Inference",
    category: "framework",
    categoryLabel: "Language",
    date: "Nov 28, 2024",
    readTime: "4 min",
    icon: IconCode,
  },
  {
    id: 7,
    title: "GitHub Copilot X: Next Generation AI Pair Programming",
    category: "tool",
    categoryLabel: "AI Tool",
    date: "Nov 27, 2024",
    readTime: "6 min",
    icon: IconSparkles,
  },
  {
    id: 8,
    title: "PostgreSQL 17 Performance Benchmarks Show 40% Improvement",
    category: "tool",
    categoryLabel: "Database",
    date: "Nov 26, 2024",
    readTime: "7 min",
    icon: IconRocket,
  },
  {
    id: 9,
    title: "Terraform 1.7 Adds Native Testing Framework",
    category: "tool",
    categoryLabel: "DevOps",
    date: "Nov 25, 2024",
    readTime: "5 min",
    icon: IconCloud,
  },
  {
    id: 10,
    title: "New OWASP Top 10 for 2024: What Developers Need to Know",
    category: "security",
    categoryLabel: "Security",
    date: "Nov 24, 2024",
    readTime: "8 min",
    icon: IconShieldLock,
  },
];

const categories = [
  { id: "all", label: "All News", count: 156 },
  { id: "cloud", label: "Cloud", count: 42 },
  { id: "framework", label: "Frameworks", count: 38 },
  { id: "security", label: "Security", count: 28 },
  { id: "tool", label: "Tools", count: 48 },
];

const trendingTags = [
  { name: "AWS", icon: IconBrandAws },
  { name: "Azure", icon: IconBrandAzure },
  { name: "Docker", icon: IconBrandDocker },
  { name: "React", icon: IconBrandReact },
  { name: "Kubernetes", icon: IconCloud },
  { name: "AI/ML", icon: IconSparkles },
  { name: "Security", icon: IconShieldLock },
  { name: "DevOps", icon: IconRocket },
];

const getCategoryClass = (category) => {
  switch (category) {
    case "cloud":
      return classes.categoryCloud;
    case "framework":
      return classes.categoryFramework;
    case "security":
      return classes.categorySecurity;
    case "tool":
      return classes.categoryTool;
    default:
      return "";
  }
};

export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className={classes.page}>
      {/* Decorative Background */}
      <div className={classes.backgroundDecor}>
        <div className={classes.gradientMesh} />
        <div className={classes.noiseOverlay} />
      </div>

      <div className={classes.container}>
        {/* Page Header */}
        <header className={classes.pageHeader}>
          <div className={classes.headerTop}>
            <span className={classes.pageTag}>
              <IconNews size={16} />
              Tech News
            </span>
            <div className={classes.dateDisplay}>
              <IconCalendar size={14} />
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
          <h1 className={classes.pageTitle}>Stay Ahead of the Curve</h1>
          <p className={classes.pageSubtitle}>
            Curated updates from cloud providers, frameworks, and tools that matter for modern development.
          </p>
        </header>

        {/* Search Bar */}
        <div className={classes.searchBar}>
          <div className={classes.searchInputWrapper}>
            <IconSearch size={20} className={classes.searchIcon} />
            <input
              type="text"
              placeholder="Search news, topics, or technologies..."
              className={classes.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className={classes.categoryTabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${classes.categoryTab} ${
                activeCategory === cat.id ? classes.categoryTabActive : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              <span className={classes.categoryTabCount}>{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className={classes.contentGrid}>
          {/* Featured Article */}
          <article className={classes.featuredArticle}>
            <div className={classes.featuredImageContainer}>
              <div className={classes.featuredImage}>
                <featuredArticle.icon size={100} stroke={0.75} className={classes.featuredIcon} />
              </div>
              <div className={classes.featuredOverlay}>
                <span className={classes.featuredLabel}>
                  <IconSparkles size={14} />
                  Featured Story
                </span>
              </div>
            </div>
            <div className={classes.featuredContent}>
              <span className={`${classes.articleCategory} ${getCategoryClass(featuredArticle.category)}`}>
                {featuredArticle.categoryLabel}
              </span>
              <a href="/docs-dev/news" className={classes.articleLink}>
                <h2 className={classes.featuredTitle}>{featuredArticle.title}</h2>
              </a>
              <p className={classes.featuredExcerpt}>{featuredArticle.excerpt}</p>
              <div className={classes.articleMeta}>
                <div className={classes.authorInfo}>
                  <div className={classes.authorAvatar}>SC</div>
                  <div className={classes.authorDetails}>
                    <span className={classes.authorName}>{featuredArticle.author}</span>
                    <span className={classes.authorRole}>{featuredArticle.authorRole}</span>
                  </div>
                </div>
                <div className={classes.metaInfo}>
                  <span><IconCalendar size={14} /> {featuredArticle.date}</span>
                  <span><IconClock size={14} /> {featuredArticle.readTime}</span>
                </div>
              </div>
              <div className={classes.articleActions}>
                <a href="/docs-dev/news" className={classes.readMoreButton}>
                  Read Full Story
                  <IconArrowRight size={16} />
                </a>
                <div className={classes.shareActions}>
                  <button className={classes.iconButton}>
                    <IconBookmark size={18} />
                  </button>
                  <button className={classes.iconButton}>
                    <IconShare size={18} />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Top Stories */}
          <div className={classes.topStoriesSection}>
            <h3 className={classes.sectionHeading}>
              <IconTrendingUp size={18} />
              Top Stories
            </h3>
            <div className={classes.topStoriesList}>
              {topStories.map((story) => {
                const StoryIcon = story.icon;
                return (
                  <article key={story.id} className={classes.storyCard}>
                    <div className={classes.storyIconWrapper}>
                      <StoryIcon size={28} stroke={1.25} />
                    </div>
                    <div className={classes.storyContent}>
                      <span className={`${classes.storyCategory} ${getCategoryClass(story.category)}`}>
                        {story.categoryLabel}
                      </span>
                      <a href="/docs-dev/news" className={classes.storyLink}>
                        <h4 className={classes.storyTitle}>{story.title}</h4>
                      </a>
                      <p className={classes.storyExcerpt}>{story.excerpt}</p>
                      <div className={classes.storyMeta}>
                        <span>{story.author}</span>
                        <span className={classes.metaDot} />
                        <span>{story.date}</span>
                        <span className={classes.metaDot} />
                        <span>{story.readTime}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <section className={classes.latestSection}>
          <div className={classes.latestHeader}>
            <h3 className={classes.sectionHeading}>
              <IconClock size={18} />
              Latest Updates
            </h3>
            <a href="/docs-dev/news" className={classes.viewAllLink}>
              View Archive
              <IconArrowRight size={14} />
            </a>
          </div>
          <div className={classes.latestGrid}>
            {latestNews.map((news) => {
              const NewsIcon = news.icon;
              return (
                <a key={news.id} href="/docs-dev/news" className={classes.latestCard}>
                  <div className={classes.latestCardIcon}>
                    <NewsIcon size={22} stroke={1.5} />
                  </div>
                  <div className={classes.latestCardContent}>
                    <span className={`${classes.latestCategory} ${getCategoryClass(news.category)}`}>
                      {news.categoryLabel}
                    </span>
                    <h4 className={classes.latestTitle}>{news.title}</h4>
                    <div className={classes.latestMeta}>
                      <span>{news.date}</span>
                      <span className={classes.metaDot} />
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                  <IconArrowRight size={16} className={classes.latestArrow} />
                </a>
              );
            })}
          </div>
        </section>

        {/* Trending Tags */}
        <section className={classes.tagsSection}>
          <h3 className={classes.tagsHeading}>
            <IconTag size={16} />
            Trending Topics
          </h3>
          <div className={classes.tagsGrid}>
            {trendingTags.map((tag) => {
              const TagIcon = tag.icon;
              return (
                <a key={tag.name} href="/docs-dev/news" className={classes.tagCard}>
                  <TagIcon size={20} className={classes.tagCardIcon} />
                  <span className={classes.tagCardName}>{tag.name}</span>
                  <IconExternalLink size={14} className={classes.tagCardArrow} />
                </a>
              );
            })}
          </div>
        </section>

        {/* Pagination */}
        <div className={classes.pagination}>
          <button className={classes.paginationButton} disabled>
            <IconChevronLeft size={16} />
            Newer
          </button>
          <span className={classes.paginationInfo}>
            Page <strong>1</strong> of <strong>16</strong>
          </span>
          <button className={classes.paginationButton}>
            Older
            <IconChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
