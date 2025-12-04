import React from "react";
import classes from "./styles.module.css";
import {
  IconBulb,
  IconCode,
  IconEye,
  IconFlame,
  IconMessage,
  IconMessageCircle,
  IconQuestionMark,
  IconSparkles,
  IconThumbUp,
  IconUsers,
} from "@tabler/icons-react";

const discussions = [
  {
    id: 1,
    title: "Implementing Clean Architecture in .NET Core Projects",
    excerpt:
      "A comprehensive guide on structuring your .NET projects using Clean Architecture principles for better maintainability and testability.",
    category: "best-practice",
    categoryLabel: "Best Practice",
    author: "Miguel Santos",
    authorInitials: "MS",
    time: "2 hours ago",
    replies: 24,
    views: 156,
    featured: true,
  },
  {
    id: 2,
    title: "Proposal: Automated Code Review Bot for Pull Requests",
    excerpt:
      "Suggesting we implement an AI-powered code review assistant to help catch common issues and enforce coding standards.",
    category: "innovation",
    categoryLabel: "Innovation",
    author: "Ana Costa",
    authorInitials: "AC",
    time: "5 hours ago",
    replies: 18,
    views: 89,
    featured: false,
  },
  {
    id: 3,
    title: "Best approach for handling microservices communication?",
    excerpt:
      "Looking for recommendations on message queues vs REST vs gRPC for our new distributed system architecture.",
    category: "question",
    categoryLabel: "Question",
    author: "Pedro Lima",
    authorInitials: "PL",
    time: "Yesterday",
    replies: 31,
    views: 203,
    featured: false,
  },
  {
    id: 4,
    title: "React 19 New Features - What It Means for Our Projects",
    excerpt:
      "Discussion about the upcoming React 19 release and how we can leverage the new concurrent features in our frontend apps.",
    category: "discussion",
    categoryLabel: "Discussion",
    author: "Sofia Martins",
    authorInitials: "SM",
    time: "2 days ago",
    replies: 42,
    views: 312,
    featured: false,
  },
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

export function ForumSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.layout}>
          {/* Left Column - Header */}
          <div className={classes.headerColumn}>
            <span className={classes.sectionTag}>
              <IconUsers size={16} />
              Community
            </span>
            <h2 className={classes.sectionTitle}>
              Join the Discussion
            </h2>
            <p className={classes.sectionSubtitle}>
              Connect with fellow Decskill developers. Share your knowledge,
              propose innovations, and learn from the community.
            </p>

            <a href="/docs-dev/forum" className={classes.actionButton}>
              <IconMessageCircle size={18} />
              View All Discussions
            </a>

            <div className={classes.statsRow}>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>247</div>
                <div className={classes.statLabel}>Active Topics</div>
              </div>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>1.2k</div>
                <div className={classes.statLabel}>Replies</div>
              </div>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>89</div>
                <div className={classes.statLabel}>Contributors</div>
              </div>
            </div>
          </div>

          {/* Right Column - Discussions */}
          <div className={classes.discussionsList}>
            {discussions.map((discussion) => {
              const CategoryIcon = getCategoryIcon(discussion.category);

              return (
                <a
                  key={discussion.id}
                  href="/docs-dev/forum"
                  className={`${classes.discussionCard} ${
                    discussion.featured ? classes.discussionFeatured : ""
                  }`}
                >
                  {discussion.featured && (
                    <div className={classes.featuredBadge}>
                      <IconFlame size={12} />
                      Trending
                    </div>
                  )}

                  <div className={classes.discussionHeader}>
                    <span
                      className={`${classes.discussionCategory} ${getCategoryClass(
                        discussion.category
                      )}`}
                    >
                      <CategoryIcon size={12} />
                      {discussion.categoryLabel}
                    </span>
                    <span className={classes.discussionTime}>
                      {discussion.time}
                    </span>
                  </div>

                  <h3 className={classes.discussionTitle}>{discussion.title}</h3>
                  <p className={classes.discussionExcerpt}>
                    {discussion.excerpt}
                  </p>

                  <div className={classes.discussionFooter}>
                    <div className={classes.discussionAuthor}>
                      <div className={classes.authorAvatar}>
                        {discussion.authorInitials}
                      </div>
                      <span className={classes.authorName}>
                        {discussion.author}
                      </span>
                    </div>
                    <div className={classes.discussionMeta}>
                      <span className={classes.metaItem}>
                        <IconMessage size={14} className={classes.metaIcon} />
                        {discussion.replies}
                      </span>
                      <span className={classes.metaItem}>
                        <IconEye size={14} className={classes.metaIcon} />
                        {discussion.views}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
