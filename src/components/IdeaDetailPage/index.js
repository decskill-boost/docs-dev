import React, { useState } from "react";
import classes from "./styles.module.css";
import {
  IconArrowLeft,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconDots,
  IconEdit,
  IconFlame,
  IconMessage,
  IconRocket,
  IconSend,
  IconThumbUp,
  IconTrendingUp,
  IconUser,
} from "@tabler/icons-react";

// Mock data - in production this would come from an API
const ideaData = {
  id: 1,
  title: "AI-Powered Code Review Assistant",
  description: `Implement an AI assistant to automatically review PRs for bugs, security issues, and code style. This could integrate with our existing GitHub workflows and provide immediate feedback to developers.

## Problem Statement
Currently, code reviews are a bottleneck in our development process. Senior developers spend significant time reviewing PRs, and feedback cycles can take days. This slows down feature delivery and can lead to context switching.

## Proposed Solution
Build an AI-powered code review assistant that:
- Automatically analyzes PRs when they're created
- Checks for common bugs, security vulnerabilities, and code style issues
- Provides inline comments with suggestions
- Learns from our codebase patterns over time
- Integrates with GitHub Actions

## Benefits
- Faster feedback cycles (minutes instead of hours/days)
- Consistent code quality standards
- Frees up senior developers for more complex reviews
- Catches issues earlier in the development cycle

## Technical Considerations
- Could use OpenAI API or build custom models
- Need to handle rate limiting and costs
- Privacy considerations for code analysis
- Integration with existing CI/CD pipeline`,
  author: "Ana Costa",
  authorInitials: "AC",
  authorRole: "Tech Lead",
  authorDepartment: "Platform Team",
  votes: 47,
  status: "review",
  trending: true,
  createdAt: "December 1, 2024",
  updatedAt: "December 3, 2024",
  tags: ["AI", "Automation", "DevOps", "Code Quality"],
  impact: "high",
  comments: [
    {
      id: 1,
      author: "Miguel Santos",
      authorInitials: "MS",
      authorRole: "Senior Developer",
      content: "This is a great idea! I've been thinking about this for a while. We could start with a simple rule-based system and gradually add ML capabilities.",
      createdAt: "2 days ago",
      likes: 12,
    },
    {
      id: 2,
      author: "Pedro Lima",
      authorInitials: "PL",
      authorRole: "DevOps Engineer",
      content: "I can help with the GitHub Actions integration. We already have some hooks in place that could be extended for this purpose.",
      createdAt: "1 day ago",
      likes: 8,
    },
    {
      id: 3,
      author: "Sofia Martins",
      authorInitials: "SM",
      authorRole: "Frontend Developer",
      content: "Have we considered using GitHub Copilot's code review features? It might be a good starting point before building something custom.",
      createdAt: "12 hours ago",
      likes: 5,
    },
  ],
};

const statusConfig = {
  draft: { label: "Draft", color: "#627d98", icon: IconClock, bgColor: "rgba(98, 125, 152, 0.15)" },
  review: { label: "Under Review", color: "#ffab00", icon: IconClock, bgColor: "rgba(255, 171, 0, 0.15)" },
  approved: { label: "Approved", color: "#00c853", icon: IconCheck, bgColor: "rgba(0, 200, 83, 0.15)" },
  "in-progress": { label: "In Progress", color: "#0066ff", icon: IconTrendingUp, bgColor: "rgba(0, 102, 255, 0.15)" },
  completed: { label: "Completed", color: "#00d4ff", icon: IconRocket, bgColor: "rgba(0, 212, 255, 0.15)" },
};

const allStatuses = ["draft", "review", "approved", "in-progress", "completed"];

const impactConfig = {
  low: { label: "Low Impact", color: "#627d98" },
  medium: { label: "Medium Impact", color: "#ffab00" },
  high: { label: "High Impact", color: "#00c853" },
};

export function IdeaDetailPage() {
  const [idea, setIdea] = useState(ideaData);
  const [newComment, setNewComment] = useState("");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const status = statusConfig[idea.status];
  const StatusIcon = status.icon;
  const impact = impactConfig[idea.impact];

  const handleVote = () => {
    if (!hasVoted) {
      setIdea(prev => ({ ...prev, votes: prev.votes + 1 }));
      setHasVoted(true);
    } else {
      setIdea(prev => ({ ...prev, votes: prev.votes - 1 }));
      setHasVoted(false);
    }
  };

  const handleStatusChange = (newStatus) => {
    setIdea(prev => ({ ...prev, status: newStatus }));
    setShowStatusDropdown(false);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: idea.comments.length + 1,
      author: "You",
      authorInitials: "YO",
      authorRole: "Developer",
      content: newComment,
      createdAt: "Just now",
      likes: 0,
    };

    setIdea(prev => ({
      ...prev,
      comments: [...prev.comments, comment],
    }));
    setNewComment("");
  };

  return (
    <section className={classes.page}>
      {/* Background */}
      <div className={classes.backgroundDecor}>
        <div className={classes.gradientOrb1} />
        <div className={classes.gradientOrb2} />
      </div>

      <div className={classes.container}>
        {/* Back Link */}
        <a href="/docs-dev/innovation" className={classes.backLink}>
          <IconArrowLeft size={16} />
          Back to Innovation Hub
        </a>

        <div className={classes.layout}>
          {/* Main Content */}
          <main className={classes.mainContent}>
            {/* Header */}
            <header className={classes.header}>
              <div className={classes.headerTop}>
                <div className={classes.badges}>
                  {idea.trending && (
                    <span className={classes.trendingBadge}>
                      <IconFlame size={12} />
                      Trending
                    </span>
                  )}
                  <span className={classes.impactBadge} style={{ color: impact.color }}>
                    {impact.label}
                  </span>
                </div>
                <div className={classes.headerMeta}>
                  <span>Created {idea.createdAt}</span>
                  <span className={classes.metaDot} />
                  <span>Updated {idea.updatedAt}</span>
                </div>
              </div>

              <h1 className={classes.title}>{idea.title}</h1>

              <div className={classes.tags}>
                {idea.tags.map(tag => (
                  <span key={tag} className={classes.tag}>{tag}</span>
                ))}
              </div>

              {/* Author */}
              <div className={classes.authorSection}>
                <div className={classes.authorAvatar}>{idea.authorInitials}</div>
                <div className={classes.authorInfo}>
                  <span className={classes.authorName}>{idea.author}</span>
                  <span className={classes.authorRole}>{idea.authorRole} · {idea.authorDepartment}</span>
                </div>
              </div>
            </header>

            {/* Content */}
            <article className={classes.content}>
              {idea.description.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className={classes.heading}>{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={index} className={classes.listItem}>{paragraph.replace('- ', '')}</li>;
                }
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                return <p key={index} className={classes.paragraph}>{paragraph}</p>;
              })}
            </article>

            {/* Comments Section */}
            <section className={classes.commentsSection}>
              <h3 className={classes.commentsTitle}>
                <IconMessage size={20} />
                Discussion ({idea.comments.length})
              </h3>

              {/* Comment Form */}
              <form className={classes.commentForm} onSubmit={handleSubmitComment}>
                <div className={classes.commentInputWrapper}>
                  <div className={classes.commentAvatar}>YO</div>
                  <textarea
                    className={classes.commentInput}
                    placeholder="Share your thoughts on this idea..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                </div>
                <div className={classes.commentFormActions}>
                  <span className={classes.commentHint}>Markdown supported</span>
                  <button
                    type="submit"
                    className={classes.commentSubmit}
                    disabled={!newComment.trim()}
                  >
                    <IconSend size={16} />
                    Post Comment
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className={classes.commentsList}>
                {idea.comments.map(comment => (
                  <div key={comment.id} className={classes.comment}>
                    <div className={classes.commentHeader}>
                      <div className={classes.commentAuthor}>
                        <div className={classes.commentAuthorAvatar}>{comment.authorInitials}</div>
                        <div className={classes.commentAuthorInfo}>
                          <span className={classes.commentAuthorName}>{comment.author}</span>
                          <span className={classes.commentAuthorRole}>{comment.authorRole}</span>
                        </div>
                      </div>
                      <div className={classes.commentMeta}>
                        <span className={classes.commentTime}>{comment.createdAt}</span>
                        <button className={classes.commentMenuButton}>
                          <IconDots size={16} />
                        </button>
                      </div>
                    </div>
                    <p className={classes.commentContent}>{comment.content}</p>
                    <div className={classes.commentActions}>
                      <button className={classes.commentLikeButton}>
                        <IconThumbUp size={14} />
                        {comment.likes}
                      </button>
                      <button className={classes.commentReplyButton}>
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className={classes.sidebar}>
            {/* Vote Card */}
            <div className={classes.voteCard}>
              <div className={classes.voteCount}>{idea.votes}</div>
              <div className={classes.voteLabel}>votes</div>
              <button
                className={`${classes.voteButton} ${hasVoted ? classes.voteButtonActive : ""}`}
                onClick={handleVote}
              >
                <IconThumbUp size={18} />
                {hasVoted ? "Voted" : "Vote for this idea"}
              </button>
            </div>

            {/* Status Card */}
            <div className={classes.statusCard}>
              <h4 className={classes.statusCardTitle}>Status</h4>
              <div className={classes.statusDropdownWrapper}>
                <button
                  className={classes.statusDropdownTrigger}
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                  style={{ "--status-color": status.color }}
                >
                  <span className={classes.statusBadge} style={{ background: status.bgColor, color: status.color }}>
                    <StatusIcon size={14} />
                    {status.label}
                  </span>
                  <IconChevronDown size={16} />
                </button>
                {showStatusDropdown && (
                  <div className={classes.statusDropdownMenu}>
                    {allStatuses.map(s => {
                      const config = statusConfig[s];
                      const Icon = config.icon;
                      return (
                        <button
                          key={s}
                          className={`${classes.statusDropdownItem} ${idea.status === s ? classes.statusDropdownItemActive : ""}`}
                          onClick={() => handleStatusChange(s)}
                        >
                          <span style={{ background: config.bgColor, color: config.color }} className={classes.statusBadgeSmall}>
                            <Icon size={12} />
                            {config.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <p className={classes.statusHint}>
                Update the status as this idea progresses through the review process.
              </p>
            </div>

            {/* Info Card */}
            <div className={classes.infoCard}>
              <h4 className={classes.infoCardTitle}>Details</h4>
              <div className={classes.infoRow}>
                <span className={classes.infoLabel}>Category</span>
                <span className={classes.infoValue}>Automation</span>
              </div>
              <div className={classes.infoRow}>
                <span className={classes.infoLabel}>Impact</span>
                <span className={classes.infoValue} style={{ color: impact.color }}>{impact.label}</span>
              </div>
              <div className={classes.infoRow}>
                <span className={classes.infoLabel}>Comments</span>
                <span className={classes.infoValue}>{idea.comments.length}</span>
              </div>
              <div className={classes.infoRow}>
                <span className={classes.infoLabel}>Created</span>
                <span className={classes.infoValue}>{idea.createdAt}</span>
              </div>
            </div>

            {/* Actions */}
            <div className={classes.actionsCard}>
              <button className={classes.actionButton}>
                <IconEdit size={16} />
                Edit Idea
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
