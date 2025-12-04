import React from "react";
import classes from "./styles.module.css";
import {
  IconBook,
  IconBulb,
  IconCode,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.glowOrb} />

      {/* Floating Cards - Visual Elements */}
      <div className={classes.floatingElements}>
        <div className={`${classes.floatingCard} ${classes.floatingCard1}`}>
          <div className={classes.floatingCardIcon}>
            <IconCode size={20} />
          </div>
          <div className={classes.floatingCardTitle}>Best Practices</div>
          <div className={classes.floatingCardDesc}>Clean code standards</div>
        </div>

        <div className={`${classes.floatingCard} ${classes.floatingCard2}`}>
          <div className={classes.floatingCardIcon}>
            <IconBulb size={20} />
          </div>
          <div className={classes.floatingCardTitle}>Innovation</div>
          <div className={classes.floatingCardDesc}>Share your ideas</div>
        </div>

        <div className={`${classes.floatingCard} ${classes.floatingCard3}`}>
          <div className={classes.floatingCardIcon}>
            <IconUsers size={20} />
          </div>
          <div className={classes.floatingCardTitle}>Community</div>
          <div className={classes.floatingCardDesc}>Learn together</div>
        </div>
      </div>

      <div className={classes.inner}>
        {/* Badge */}
        <div className={classes.badge}>
          <span className={classes.badgeDot} />
          Developer Knowledge Platform
        </div>

        {/* Title */}
        <h1 className={classes.title}>
          <span className={classes.titleGradient}>Decskill Hub</span>
          <span className={classes.titleSecondary}>
            Knowledge Center for Developers
          </span>
        </h1>

        {/* Description */}
        <p className={classes.description}>
          Your central hub for development best practices, innovation ideas,
          technical discussions, and the latest news in cloud and technology.
          Empowering Decskill developers to build better, together.
        </p>

        {/* CTA Buttons */}
        <div className={classes.controls}>
          <a href="/docs-dev/docs/intro" className={classes.controlPrimary}>
            <span>
              <IconRocket size={20} />
              Explore Documentation
            </span>
          </a>
          <a href="#features" className={classes.controlSecondary}>
            <IconBook size={20} />
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className={classes.stats}>
          <div className={classes.statItem}>
            <span className={classes.statNumber}>50+</span>
            <span className={classes.statLabel}>Best Practice Guides</span>
          </div>
          <div className={classes.statItem}>
            <span className={classes.statNumber}>10+</span>
            <span className={classes.statLabel}>Technology Stacks</span>
          </div>
          <div className={classes.statItem}>
            <span className={classes.statNumber}>100%</span>
            <span className={classes.statLabel}>Community Driven</span>
          </div>
        </div>
      </div>
    </div>
  );
}
