import React from "react";
import classes from "./styles.module.css";
import {
  IconArrowRight,
  IconBulb,
  IconCode,
  IconFlame,
  IconMessage,
  IconMessageCircle,
  IconQuestionMark,
} from "@tabler/icons-react";

const discussions = [
  {
    id: 1,
    title: "Clean Architecture in .NET Core",
    category: "best-practice",
    author: "MS",
    replies: 24,
    hot: true,
  },
  {
    id: 2,
    title: "AI Code Review Bot Proposal",
    category: "innovation",
    author: "AC",
    replies: 18,
    hot: false,
  },
  {
    id: 3,
    title: "Microservices communication patterns?",
    category: "question",
    author: "PL",
    replies: 31,
    hot: false,
  },
];

const getCategoryStyle = (category) => {
  switch (category) {
    case "best-practice":
      return { bg: "rgba(0, 102, 255, 0.15)", color: "#3385ff" };
    case "innovation":
      return { bg: "rgba(0, 200, 83, 0.15)", color: "#00c853" };
    case "question":
      return { bg: "rgba(255, 171, 0, 0.15)", color: "#ffab00" };
    default:
      return { bg: "rgba(0, 212, 255, 0.15)", color: "#00d4ff" };
  }
};

const getCategoryIcon = (category) => {
  switch (category) {
    case "best-practice":
      return IconCode;
    case "innovation":
      return IconBulb;
    case "question":
      return IconQuestionMark;
    default:
      return IconMessageCircle;
  }
};

export function ForumPreview() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3 className={classes.title}>
          <IconMessageCircle size={20} />
          Recent Discussions
        </h3>
        <a href="/docs-dev/docs/community" className={classes.viewAll}>
          View All <IconArrowRight size={14} />
        </a>
      </div>

      <div className={classes.list}>
        {discussions.map((item) => {
          const CategoryIcon = getCategoryIcon(item.category);
          const categoryStyle = getCategoryStyle(item.category);

          return (
            <a
              key={item.id}
              href={`/docs-dev/docs/community/${item.id}`}
              className={classes.item}
            >
              <div className={classes.itemLeft}>
                <div
                  className={classes.categoryBadge}
                  style={{
                    background: categoryStyle.bg,
                    color: categoryStyle.color,
                  }}
                >
                  <CategoryIcon size={12} />
                </div>
                <span className={classes.itemTitle}>
                  {item.title}
                  {item.hot && (
                    <IconFlame size={14} className={classes.hotIcon} />
                  )}
                </span>
              </div>
              <div className={classes.itemMeta}>
                <div className={classes.avatar}>{item.author}</div>
                <span className={classes.replies}>
                  <IconMessage size={12} />
                  {item.replies}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
