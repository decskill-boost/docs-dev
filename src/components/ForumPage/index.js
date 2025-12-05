import React, { useState } from "react";
import classes from "./styles.module.css";
import {
  IconAdjustments,
  IconArrowUp,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconCode,
  IconEye,
  IconFilter,
  IconFlame,
  IconMessage,
  IconMessageCircle,
  IconPin,
  IconPlus,
  IconQuestionMark,
  IconSearch,
  IconSortDescending,
  IconSparkles,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";

const allDiscussions = [
  {
    id: 1,
    title: "Implementing Clean Architecture in .NET Core Projects",
    excerpt:
      "A comprehensive guide on structuring your .NET projects using Clean Architecture principles for better maintainability and testability. Learn how to separate concerns and create a scalable codebase.",
    category: "best-practice",
    categoryLabel: "Best Practice",
    author: "Miguel Santos",
    authorInitials: "MS",
    authorRole: "Senior Developer",
    time: "2 hours ago",
    replies: 24,
    views: 156,
    upvotes: 47,
    featured: true,
    pinned: true,
    solved: false,
    tags: [".NET", "Architecture", "Clean Code"],
  },
  {
    id: 2,
    title: "Proposal: Automated Code Review Bot for Pull Requests",
    excerpt:
      "Suggesting we implement an AI-powered code review assistant to help catch common issues and enforce coding standards automatically across all repositories.",
    category: "innovation",
    categoryLabel: "Innovation",
    author: "Ana Costa",
    authorInitials: "AC",
    authorRole: "Tech Lead",
    time: "5 hours ago",
    replies: 18,
    views: 89,
    upvotes: 38,
    featured: false,
    pinned: false,
    solved: false,
    tags: ["AI", "DevOps", "Automation"],
  },
  {
    id: 3,
    title: "Best approach for handling microservices communication?",
    excerpt:
      "Looking for recommendations on message queues vs REST vs gRPC for our new distributed system architecture. What are the trade-offs in terms of performance and complexity?",
    category: "question",
    categoryLabel: "Question",
    author: "Pedro Lima",
    authorInitials: "PL",
    authorRole: "Backend Developer",
    time: "Yesterday",
    replies: 31,
    views: 203,
    upvotes: 25,
    featured: false,
    pinned: false,
    solved: true,
    tags: ["Microservices", "Architecture", "Backend"],
  },
  {
    id: 4,
    title: "React 19 New Features - What It Means for Our Projects",
    excerpt:
      "Discussion about the upcoming React 19 release and how we can leverage the new concurrent features in our frontend apps. Let's prepare for the migration.",
    category: "discussion",
    categoryLabel: "Discussion",
    author: "Sofia Martins",
    authorInitials: "SM",
    authorRole: "Frontend Developer",
    time: "2 days ago",
    replies: 42,
    views: 312,
    upvotes: 56,
    featured: false,
    pinned: false,
    solved: false,
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
    id: 5,
    title: "Docker Compose Best Practices for Local Development",
    excerpt:
      "Sharing my experience setting up efficient Docker Compose configurations for development environments. Includes tips for hot-reloading and database persistence.",
    category: "best-practice",
    categoryLabel: "Best Practice",
    author: "João Ferreira",
    authorInitials: "JF",
    authorRole: "DevOps Engineer",
    time: "3 days ago",
    replies: 15,
    views: 178,
    upvotes: 33,
    featured: false,
    pinned: false,
    solved: false,
    tags: ["Docker", "DevOps", "Local Dev"],
  },
  {
    id: 6,
    title: "How to handle JWT token refresh in React applications?",
    excerpt:
      "I'm implementing authentication in our React app and need advice on the best strategy for handling JWT token refresh without disrupting user experience.",
    category: "question",
    categoryLabel: "Question",
    author: "Rita Oliveira",
    authorInitials: "RO",
    authorRole: "Frontend Developer",
    time: "4 days ago",
    replies: 28,
    views: 245,
    upvotes: 19,
    featured: false,
    pinned: false,
    solved: true,
    tags: ["React", "Authentication", "JWT"],
  },
  {
    id: 7,
    title: "Proposal: Internal Component Library with Storybook",
    excerpt:
      "Let's create a unified component library documented with Storybook. This will improve consistency across projects and speed up development.",
    category: "innovation",
    categoryLabel: "Innovation",
    author: "Carlos Mendes",
    authorInitials: "CM",
    authorRole: "UI/UX Developer",
    time: "5 days ago",
    replies: 22,
    views: 134,
    upvotes: 41,
    featured: false,
    pinned: false,
    solved: false,
    tags: ["Storybook", "Components", "Design System"],
  },
  {
    id: 8,
    title: "Performance optimization strategies for PostgreSQL queries",
    excerpt:
      "Deep dive into indexing strategies, query optimization, and connection pooling for PostgreSQL. Real-world examples from our production systems.",
    category: "best-practice",
    categoryLabel: "Best Practice",
    author: "Bruno Alves",
    authorInitials: "BA",
    authorRole: "Database Admin",
    time: "1 week ago",
    replies: 19,
    views: 289,
    upvotes: 52,
    featured: false,
    pinned: false,
    solved: false,
    tags: ["PostgreSQL", "Performance", "Database"],
  },
];

const categories = [
  { id: "all", label: "All Topics", icon: IconMessageCircle, count: 247 },
  { id: "best-practice", label: "Best Practices", icon: IconCode, count: 68 },
  { id: "innovation", label: "Innovation", icon: IconBulb, count: 34 },
  { id: "question", label: "Questions", icon: IconQuestionMark, count: 89 },
  { id: "discussion", label: "Discussions", icon: IconMessage, count: 56 },
];

const sortOptions = [
  { id: "recent", label: "Most Recent" },
  { id: "popular", label: "Most Popular" },
  { id: "replies", label: "Most Replies" },
  { id: "unanswered", label: "Unanswered" },
];

const getCategoryIcon = (category) => {
  switch (category) {
    case "best-practice":
      return IconCode;
    case "innovation":
      return IconBulb;
    case "question":
      return IconQuestionMark;
    case "discussion":
      return IconMessageCircle;
    default:
      return IconMessage;
  }
};

const getCategoryClass = (category) => {
  switch (category) {
    case "best-practice":
      return classes.categoryBestPractice;
    case "innovation":
      return classes.categoryInnovation;
    case "question":
      return classes.categoryQuestion;
    case "discussion":
      return classes.categoryDiscussion;
    default:
      return "";
  }
};

export function ForumPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filteredDiscussions = allDiscussions.filter((d) => {
    if (activeCategory !== "all" && d.category !== activeCategory) return false;
    if (searchQuery && !d.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <section className={classes.page}>
      {/* Decorative Background */}
      <div className={classes.backgroundDecor}>
        <div className={classes.gradientOrb1} />
        <div className={classes.gradientOrb2} />
        <div className={classes.gridPattern} />
      </div>

      <div className={classes.container}>
        {/* Page Header */}
        <header className={classes.pageHeader}>
          <div className={classes.headerContent}>
            <span className={classes.pageTag}>
              <IconUsers size={16} />
              Community Forum
            </span>
            <h1 className={classes.pageTitle}>Developer Discussions</h1>
            <p className={classes.pageSubtitle}>
              Connect with 89+ Decskill developers. Share knowledge, propose innovations,
              ask questions, and learn from the community.
            </p>
          </div>

          <div className={classes.headerActions}>
            <a href="/docs-dev/forum/new" className={classes.newTopicButton}>
              <IconPlus size={18} />
              New Discussion
            </a>
          </div>
        </header>

        {/* Stats Bar */}
        <div className={classes.statsBar}>
          <div className={classes.statCard}>
            <div className={classes.statIcon}>
              <IconMessageCircle size={20} />
            </div>
            <div className={classes.statInfo}>
              <span className={classes.statValue}>247</span>
              <span className={classes.statLabel}>Topics</span>
            </div>
          </div>
          <div className={classes.statCard}>
            <div className={classes.statIcon}>
              <IconMessage size={20} />
            </div>
            <div className={classes.statInfo}>
              <span className={classes.statValue}>1,247</span>
              <span className={classes.statLabel}>Replies</span>
            </div>
          </div>
          <div className={classes.statCard}>
            <div className={classes.statIcon}>
              <IconUsers size={20} />
            </div>
            <div className={classes.statInfo}>
              <span className={classes.statValue}>89</span>
              <span className={classes.statLabel}>Contributors</span>
            </div>
          </div>
          <div className={classes.statCard}>
            <div className={classes.statIcon}>
              <IconCheck size={20} />
            </div>
            <div className={classes.statInfo}>
              <span className={classes.statValue}>156</span>
              <span className={classes.statLabel}>Solved</span>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className={classes.mainLayout}>
          {/* Sidebar */}
          <aside className={classes.sidebar}>
            <div className={classes.sidebarSection}>
              <h3 className={classes.sidebarTitle}>Categories</h3>
              <nav className={classes.categoryNav}>
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      className={`${classes.categoryButton} ${
                        activeCategory === cat.id ? classes.categoryActive : ""
                      }`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <Icon size={16} className={classes.categoryIcon} />
                      <span className={classes.categoryLabel}>{cat.label}</span>
                      <span className={classes.categoryCount}>{cat.count}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className={classes.sidebarSection}>
              <h3 className={classes.sidebarTitle}>Popular Tags</h3>
              <div className={classes.tagCloud}>
                {["React", ".NET", "Docker", "AWS", "TypeScript", "PostgreSQL", "Architecture", "DevOps"].map((tag) => (
                  <button key={tag} className={classes.tagButton}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className={classes.sidebarSection}>
              <h3 className={classes.sidebarTitle}>Top Contributors</h3>
              <div className={classes.contributorsList}>
                {[
                  { name: "Miguel Santos", initials: "MS", posts: 47 },
                  { name: "Ana Costa", initials: "AC", posts: 38 },
                  { name: "Sofia Martins", initials: "SM", posts: 31 },
                ].map((user) => (
                  <div key={user.name} className={classes.contributor}>
                    <div className={classes.contributorAvatar}>{user.initials}</div>
                    <div className={classes.contributorInfo}>
                      <span className={classes.contributorName}>{user.name}</span>
                      <span className={classes.contributorPosts}>{user.posts} posts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className={classes.mainContent}>
            {/* Search and Filter Bar */}
            <div className={classes.toolbar}>
              <div className={classes.searchWrapper}>
                <IconSearch size={18} className={classes.searchIcon} />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className={classes.searchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className={classes.toolbarActions}>
                <div className={classes.sortDropdown}>
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

                <button className={classes.filterButton}>
                  <IconAdjustments size={16} />
                  Filters
                </button>
              </div>
            </div>

            {/* Discussion List */}
            <div className={classes.discussionList}>
              {filteredDiscussions.map((discussion) => {
                const CategoryIcon = getCategoryIcon(discussion.category);

                return (
                  <article
                    key={discussion.id}
                    className={`${classes.discussionCard} ${
                      discussion.pinned ? classes.discussionPinned : ""
                    } ${discussion.featured ? classes.discussionFeatured : ""}`}
                  >
                    {/* Left: Votes */}
                    <div className={classes.voteColumn}>
                      <button className={classes.voteButton}>
                        <IconArrowUp size={18} />
                      </button>
                      <span className={classes.voteCount}>{discussion.upvotes}</span>
                    </div>

                    {/* Main Content */}
                    <div className={classes.discussionMain}>
                      <div className={classes.discussionHeader}>
                        <div className={classes.discussionBadges}>
                          {discussion.pinned && (
                            <span className={classes.pinnedBadge}>
                              <IconPin size={12} />
                              Pinned
                            </span>
                          )}
                          {discussion.featured && (
                            <span className={classes.featuredBadge}>
                              <IconFlame size={12} />
                              Trending
                            </span>
                          )}
                          {discussion.solved && (
                            <span className={classes.solvedBadge}>
                              <IconCheck size={12} />
                              Solved
                            </span>
                          )}
                          <span
                            className={`${classes.categoryBadge} ${getCategoryClass(
                              discussion.category
                            )}`}
                          >
                            <CategoryIcon size={12} />
                            {discussion.categoryLabel}
                          </span>
                        </div>
                        <span className={classes.discussionTime}>{discussion.time}</span>
                      </div>

                      <a href="/docs-dev/forum/discussion" className={classes.discussionLink}>
                        <h3 className={classes.discussionTitle}>{discussion.title}</h3>
                      </a>
                      <p className={classes.discussionExcerpt}>{discussion.excerpt}</p>

                      <div className={classes.discussionTags}>
                        {discussion.tags.map((tag) => (
                          <span key={tag} className={classes.discussionTag}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className={classes.discussionFooter}>
                        <div className={classes.authorInfo}>
                          <div className={classes.authorAvatar}>
                            {discussion.authorInitials}
                          </div>
                          <div className={classes.authorDetails}>
                            <span className={classes.authorName}>{discussion.author}</span>
                            <span className={classes.authorRole}>{discussion.authorRole}</span>
                          </div>
                        </div>

                        <div className={classes.discussionStats}>
                          <span className={classes.statItem}>
                            <IconMessage size={14} />
                            {discussion.replies} replies
                          </span>
                          <span className={classes.statItem}>
                            <IconEye size={14} />
                            {discussion.views} views
                          </span>
                        </div>
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
              <div className={classes.paginationNumbers}>
                <button className={`${classes.pageNumber} ${classes.pageNumberActive}`}>1</button>
                <button className={classes.pageNumber}>2</button>
                <button className={classes.pageNumber}>3</button>
                <span className={classes.paginationEllipsis}>...</span>
                <button className={classes.pageNumber}>12</button>
              </div>
              <button className={classes.paginationButton}>
                Next
                <IconChevronRight size={16} />
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
