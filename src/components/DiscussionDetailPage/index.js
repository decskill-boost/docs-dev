import React, { useState } from "react";
import classes from "./styles.module.css";
import {
  IconArrowLeft,
  IconBookmark,
  IconBulb,
  IconCheck,
  IconCode,
  IconDots,
  IconEdit,
  IconEye,
  IconFlag,
  IconFlame,
  IconMessage,
  IconMessageCircle,
  IconPin,
  IconQuestionMark,
  IconSend,
  IconShare,
  IconThumbUp,
  IconTrash,
} from "@tabler/icons-react";

// Mock data - in production this would come from an API
const discussionData = {
  id: 1,
  title: "Implementing Clean Architecture in .NET Core Projects",
  content: `I've been working on restructuring our .NET Core projects to follow Clean Architecture principles, and I wanted to share some insights and get feedback from the community.

## Current Situation
Our codebase has grown organically over the years, and we're starting to see the effects:
- Business logic scattered across controllers and services
- Tight coupling between layers
- Difficulty writing unit tests
- Hard to understand the domain model

## Proposed Structure
I'm proposing we adopt the following layer structure:

\`\`\`
├── Domain/           # Enterprise business rules
├── Application/      # Application business rules
├── Infrastructure/   # External concerns (DB, APIs)
└── Presentation/     # UI, Controllers
\`\`\`

### Domain Layer
- Contains entities, value objects, and domain events
- No dependencies on other layers
- Pure business logic

### Application Layer
- Use cases / application services
- DTOs and mapping
- Interfaces for infrastructure

### Infrastructure Layer
- Database implementations
- External service integrations
- Dependency injection setup

## Benefits
1. **Testability**: Easy to mock dependencies
2. **Maintainability**: Clear separation of concerns
3. **Flexibility**: Can swap implementations easily
4. **Domain Focus**: Business logic is isolated

## Questions
- Has anyone implemented this in a large-scale project?
- How do you handle cross-cutting concerns?
- What's your approach to validation?

Looking forward to hearing your thoughts!`,
  category: "best-practice",
  categoryLabel: "Best Practice",
  author: "Miguel Santos",
  authorInitials: "MS",
  authorRole: "Senior Developer",
  authorDepartment: "Backend Team",
  createdAt: "December 1, 2024 at 10:30 AM",
  views: 156,
  featured: true,
  pinned: true,
  solved: false,
  tags: [".NET", "Architecture", "Clean Code", "Design Patterns"],
  replies: [
    {
      id: 1,
      author: "Ana Costa",
      authorInitials: "AC",
      authorRole: "Tech Lead",
      content: `Great write-up Miguel! We've been using Clean Architecture in our team for about 2 years now.

For cross-cutting concerns, we use a combination of:
- **MediatR behaviors** for logging, validation, and caching
- **Scrutor** for decorator pattern implementations
- Custom middleware for authentication/authorization

One thing I'd add is to be careful not to over-engineer. Start simple and add complexity only when needed.`,
      createdAt: "December 1, 2024 at 2:15 PM",
      likes: 15,
      isAccepted: false,
    },
    {
      id: 2,
      author: "Pedro Lima",
      authorInitials: "PL",
      authorRole: "Backend Developer",
      content: `I implemented this in our microservices project. A few lessons learned:

1. **Don't be too strict** - Sometimes it's okay to skip layers for simple CRUD operations
2. **Use CQRS** - It pairs really well with Clean Architecture
3. **Shared Kernel** - Create a shared library for common domain concepts

For validation, we use FluentValidation in the Application layer with MediatR pipeline behaviors.`,
      createdAt: "December 2, 2024 at 9:45 AM",
      likes: 12,
      isAccepted: true,
    },
    {
      id: 3,
      author: "Sofia Martins",
      authorInitials: "SM",
      authorRole: "Full Stack Developer",
      content: `Thanks for sharing! Quick question - how do you handle the mapping between layers?

We've been using AutoMapper but it's getting complex with nested objects. Any recommendations?`,
      createdAt: "December 2, 2024 at 3:20 PM",
      likes: 5,
      isAccepted: false,
    },
    {
      id: 4,
      author: "Miguel Santos",
      authorInitials: "MS",
      authorRole: "Senior Developer",
      content: `@Sofia great question! We actually moved away from AutoMapper to manual mapping methods.

Reasons:
- Better control over the mapping logic
- Easier to debug
- No "magic" - what you see is what you get

We create extension methods like \`entity.ToDto()\` and \`dto.ToEntity()\`. It's more code but much clearer.`,
      createdAt: "December 2, 2024 at 4:00 PM",
      likes: 8,
      isAccepted: false,
      isAuthor: true,
    },
  ],
};

const categoryConfig = {
  "best-practice": { icon: IconCode, color: "#3385ff", bgColor: "rgba(0, 102, 255, 0.15)" },
  innovation: { icon: IconBulb, color: "#00c853", bgColor: "rgba(0, 200, 83, 0.15)" },
  question: { icon: IconQuestionMark, color: "#ffab00", bgColor: "rgba(255, 171, 0, 0.15)" },
  discussion: { icon: IconMessageCircle, color: "#00d4ff", bgColor: "rgba(0, 212, 255, 0.15)" },
};

export function DiscussionDetailPage() {
  const [discussion, setDiscussion] = useState(discussionData);
  const [newReply, setNewReply] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);

  const category = categoryConfig[discussion.category];
  const CategoryIcon = category.icon;

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (!newReply.trim()) return;

    const reply = {
      id: discussion.replies.length + 1,
      author: "You",
      authorInitials: "YO",
      authorRole: "Developer",
      content: newReply,
      createdAt: "Just now",
      likes: 0,
      isAccepted: false,
    };

    setDiscussion(prev => ({
      ...prev,
      replies: [...prev.replies, reply],
    }));
    setNewReply("");
  };

  const handleMarkAsSolved = (replyId) => {
    setDiscussion(prev => ({
      ...prev,
      solved: true,
      replies: prev.replies.map(r => ({
        ...r,
        isAccepted: r.id === replyId,
      })),
    }));
  };

  const handleLikeReply = (replyId) => {
    setDiscussion(prev => ({
      ...prev,
      replies: prev.replies.map(r =>
        r.id === replyId ? { ...r, likes: r.likes + 1 } : r
      ),
    }));
  };

  return (
    <section className={classes.page}>
      {/* Background */}
      <div className={classes.backgroundDecor}>
        <div className={classes.gradientOrb1} />
        <div className={classes.gradientOrb2} />
        <div className={classes.gridPattern} />
      </div>

      <div className={classes.container}>
        {/* Back Link */}
        <a href="/docs-dev/forum" className={classes.backLink}>
          <IconArrowLeft size={16} />
          Back to Forum
        </a>

        <div className={classes.layout}>
          {/* Main Content */}
          <main className={classes.mainContent}>
            {/* Discussion Header */}
            <header className={classes.header}>
              <div className={classes.headerTop}>
                <div className={classes.badges}>
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
                    className={classes.categoryBadge}
                    style={{ background: category.bgColor, color: category.color }}
                  >
                    <CategoryIcon size={12} />
                    {discussion.categoryLabel}
                  </span>
                </div>
                <div className={classes.headerActions}>
                  <button
                    className={`${classes.headerButton} ${isBookmarked ? classes.headerButtonActive : ""}`}
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <IconBookmark size={18} />
                  </button>
                  <button className={classes.headerButton}>
                    <IconShare size={18} />
                  </button>
                  <button className={classes.headerButton}>
                    <IconDots size={18} />
                  </button>
                </div>
              </div>

              <h1 className={classes.title}>{discussion.title}</h1>

              <div className={classes.tags}>
                {discussion.tags.map(tag => (
                  <span key={tag} className={classes.tag}>{tag}</span>
                ))}
              </div>

              <div className={classes.authorRow}>
                <div className={classes.authorSection}>
                  <div className={classes.authorAvatar}>{discussion.authorInitials}</div>
                  <div className={classes.authorInfo}>
                    <span className={classes.authorName}>{discussion.author}</span>
                    <span className={classes.authorRole}>{discussion.authorRole} · {discussion.authorDepartment}</span>
                  </div>
                </div>
                <div className={classes.postMeta}>
                  <span>{discussion.createdAt}</span>
                  <span className={classes.metaDot} />
                  <span><IconEye size={14} /> {discussion.views} views</span>
                </div>
              </div>
            </header>

            {/* Discussion Content */}
            <article className={classes.content}>
              {discussion.content.split('\n').map((line, index) => {
                if (line.startsWith('## ')) {
                  return <h2 key={index} className={classes.heading}>{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index} className={classes.subheading}>{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('```')) {
                  return null; // Skip code block markers for simple rendering
                }
                if (line.startsWith('├── ') || line.startsWith('└── ')) {
                  return <code key={index} className={classes.codeLine}>{line}</code>;
                }
                if (line.startsWith('- **') || line.startsWith('1. **')) {
                  return <li key={index} className={classes.listItem}>{line.replace(/^[-\d.]\s*/, '')}</li>;
                }
                if (line.startsWith('- ')) {
                  return <li key={index} className={classes.listItem}>{line.replace('- ', '')}</li>;
                }
                if (line.trim() === '') {
                  return <br key={index} />;
                }
                return <p key={index} className={classes.paragraph}>{line}</p>;
              })}
            </article>

            {/* Replies Section */}
            <section className={classes.repliesSection}>
              <h3 className={classes.repliesTitle}>
                <IconMessage size={20} />
                {discussion.replies.length} Replies
              </h3>

              {/* Replies List */}
              <div className={classes.repliesList}>
                {discussion.replies.map((reply, index) => (
                  <div
                    key={reply.id}
                    className={`${classes.reply} ${reply.isAccepted ? classes.replyAccepted : ""} ${reply.isAuthor ? classes.replyAuthor : ""}`}
                  >
                    {reply.isAccepted && (
                      <div className={classes.acceptedBanner}>
                        <IconCheck size={14} />
                        Accepted Answer
                      </div>
                    )}
                    {reply.isAuthor && (
                      <div className={classes.authorBanner}>
                        Original Poster
                      </div>
                    )}

                    <div className={classes.replyHeader}>
                      <div className={classes.replyAuthor}>
                        <div className={classes.replyAuthorAvatar}>{reply.authorInitials}</div>
                        <div className={classes.replyAuthorInfo}>
                          <span className={classes.replyAuthorName}>{reply.author}</span>
                          <span className={classes.replyAuthorRole}>{reply.authorRole}</span>
                        </div>
                      </div>
                      <div className={classes.replyMeta}>
                        <span className={classes.replyTime}>{reply.createdAt}</span>
                        <span className={classes.replyNumber}>#{index + 1}</span>
                      </div>
                    </div>

                    <div className={classes.replyContent}>
                      {reply.content.split('\n').map((line, i) => {
                        if (line.startsWith('- **')) {
                          return <li key={i} className={classes.replyListItem}>{line.replace('- **', '').replace('**', ':')}</li>;
                        }
                        if (line.trim() === '') return <br key={i} />;
                        return <p key={i}>{line}</p>;
                      })}
                    </div>

                    <div className={classes.replyActions}>
                      <button
                        className={classes.replyLikeButton}
                        onClick={() => handleLikeReply(reply.id)}
                      >
                        <IconThumbUp size={14} />
                        {reply.likes}
                      </button>
                      <button className={classes.replyActionButton}>
                        <IconMessage size={14} />
                        Reply
                      </button>
                      {!discussion.solved && !reply.isAccepted && (
                        <button
                          className={classes.acceptButton}
                          onClick={() => handleMarkAsSolved(reply.id)}
                        >
                          <IconCheck size={14} />
                          Mark as Solution
                        </button>
                      )}
                      <button className={classes.replyActionButton}>
                        <IconFlag size={14} />
                        Report
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Form */}
              <form className={classes.replyForm} onSubmit={handleSubmitReply}>
                <h4 className={classes.replyFormTitle}>Add Your Reply</h4>
                <div className={classes.replyInputWrapper}>
                  <div className={classes.replyFormAvatar}>YO</div>
                  <textarea
                    className={classes.replyInput}
                    placeholder="Share your thoughts, answer the question, or add to the discussion..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    rows={5}
                  />
                </div>
                <div className={classes.replyFormActions}>
                  <span className={classes.replyHint}>
                    Markdown supported. Be helpful and constructive.
                  </span>
                  <button
                    type="submit"
                    className={classes.replySubmit}
                    disabled={!newReply.trim()}
                  >
                    <IconSend size={16} />
                    Post Reply
                  </button>
                </div>
              </form>
            </section>
          </main>

          {/* Sidebar */}
          <aside className={classes.sidebar}>
            {/* Author Card */}
            <div className={classes.authorCard}>
              <div className={classes.authorCardAvatar}>{discussion.authorInitials}</div>
              <h4 className={classes.authorCardName}>{discussion.author}</h4>
              <span className={classes.authorCardRole}>{discussion.authorRole}</span>
              <div className={classes.authorStats}>
                <div className={classes.authorStat}>
                  <span className={classes.authorStatValue}>47</span>
                  <span className={classes.authorStatLabel}>Posts</span>
                </div>
                <div className={classes.authorStat}>
                  <span className={classes.authorStatValue}>312</span>
                  <span className={classes.authorStatLabel}>Replies</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className={classes.statsCard}>
              <h4 className={classes.statsCardTitle}>Discussion Stats</h4>
              <div className={classes.statRow}>
                <span className={classes.statLabel}>Views</span>
                <span className={classes.statValue}>{discussion.views}</span>
              </div>
              <div className={classes.statRow}>
                <span className={classes.statLabel}>Replies</span>
                <span className={classes.statValue}>{discussion.replies.length}</span>
              </div>
              <div className={classes.statRow}>
                <span className={classes.statLabel}>Likes</span>
                <span className={classes.statValue}>
                  {discussion.replies.reduce((sum, r) => sum + r.likes, 0)}
                </span>
              </div>
              <div className={classes.statRow}>
                <span className={classes.statLabel}>Status</span>
                <span className={`${classes.statValue} ${discussion.solved ? classes.statSolved : ""}`}>
                  {discussion.solved ? "Solved" : "Open"}
                </span>
              </div>
            </div>

            {/* Related Discussions */}
            <div className={classes.relatedCard}>
              <h4 className={classes.relatedTitle}>Related Discussions</h4>
              <div className={classes.relatedList}>
                <a href="/docs-dev/forum" className={classes.relatedItem}>
                  CQRS Pattern Implementation Guide
                </a>
                <a href="/docs-dev/forum" className={classes.relatedItem}>
                  Domain-Driven Design in Practice
                </a>
                <a href="/docs-dev/forum" className={classes.relatedItem}>
                  Unit Testing Best Practices
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
