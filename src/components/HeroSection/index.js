import React from "react";
import classes from "./styles.module.css";
import {
  IconBook,
  IconBulb,
  IconCode,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";

export function HeroSection() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.glowOrb} />
      <div className={classes.glowOrb2} />

      {/* Floating Elements */}
      <div className={classes.floatingElements}>
        <div className={`${classes.floatingCard} ${classes.float1}`}>
          <div className={classes.floatingIcon}>
            <IconCode size={18} />
          </div>
          <span>Best Practices</span>
        </div>
        <div className={`${classes.floatingCard} ${classes.float2}`}>
          <div className={classes.floatingIcon}>
            <IconBulb size={18} />
          </div>
          <span>Innovation</span>
        </div>
        <div className={`${classes.floatingCard} ${classes.float3}`}>
          <div className={classes.floatingIcon}>
            <IconUsers size={18} />
          </div>
          <span>Community</span>
        </div>
      </div>

      <div className={classes.inner}>
        <div className={classes.badge}>
          <span className={classes.badgeDot} />
          Developer Knowledge Platform
        </div>

        <h1 className={classes.title}>
          <span className={classes.titleGradient}>Decskill Hub</span>
          <span className={classes.titleSecondary}>
            Knowledge Center for Developers
          </span>
        </h1>

        <p className={classes.description}>
          Your central hub for development best practices, innovation ideas,
          technical discussions, and the latest in cloud technology.
        </p>

        <div className={classes.controls}>
          <a href="/docs-dev/docs/intro" className={classes.controlPrimary}>
            <span>
              <IconRocket size={18} />
              Get Started
            </span>
          </a>
          <a href="#features" className={classes.controlSecondary}>
            <IconBook size={18} />
            Explore
          </a>
        </div>

        <div className={classes.stats}>
          <div className={classes.statItem}>
            <span className={classes.statNumber}>50+</span>
            <span className={classes.statLabel}>Guides</span>
          </div>
          <div className={classes.statItem}>
            <span className={classes.statNumber}>10+</span>
            <span className={classes.statLabel}>Tech Stacks</span>
          </div>
          <div className={classes.statItem}>
            <span className={classes.statNumber}>100%</span>
            <span className={classes.statLabel}>Community</span>
          </div>
        </div>
      </div>
    </div>
  );
}
