import React from "react";
import classes from "./styles.module.css";
import {
  IconArrowRight,
  IconBrandAws,
  IconBrandDocker,
  IconBrandReact,
  IconClock,
  IconShieldLock,
} from "@tabler/icons-react";

const news = [
  {
    id: 1,
    title: "AWS re:Invent 2024 Highlights",
    date: "Dec 3, 2024",
    category: "Cloud",
    icon: IconBrandAws,
    color: "#ff9900",
  },
  {
    id: 2,
    title: "React 19 Release Candidate",
    date: "Dec 2, 2024",
    category: "Framework",
    icon: IconBrandReact,
    color: "#61dafb",
  },
  {
    id: 3,
    title: "Critical Node.js Security Update",
    date: "Dec 1, 2024",
    category: "Security",
    icon: IconShieldLock,
    color: "#ff1744",
  },
  {
    id: 4,
    title: "Docker Desktop 4.26 Features",
    date: "Nov 30, 2024",
    category: "DevOps",
    icon: IconBrandDocker,
    color: "#2496ed",
  },
];

export function NewsHighlights() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3 className={classes.title}>Tech News</h3>
        <a href="/docs-dev/docs/news" className={classes.viewAll}>
          All News <IconArrowRight size={14} />
        </a>
      </div>

      <div className={classes.list}>
        {news.map((item) => (
          <a
            key={item.id}
            href={`/docs-dev/docs/news/${item.id}`}
            className={classes.item}
          >
            <div
              className={classes.iconWrapper}
              style={{ color: item.color }}
            >
              <item.icon size={18} stroke={1.5} />
            </div>
            <div className={classes.content}>
              <span className={classes.category}>{item.category}</span>
              <h4 className={classes.itemTitle}>{item.title}</h4>
              <span className={classes.date}>
                <IconClock size={12} />
                {item.date}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
