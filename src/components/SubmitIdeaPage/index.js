import React, { useState } from "react";
import classes from "./styles.module.css";
import {
  IconAlertCircle,
  IconArrowLeft,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconInfoCircle,
  IconLoader2,
  IconPlus,
  IconRocket,
  IconSparkles,
  IconTag,
  IconX,
} from "@tabler/icons-react";

const categories = [
  { id: "automation", label: "Automation & DevOps", description: "CI/CD, testing, deployment pipelines" },
  { id: "developer-experience", label: "Developer Experience", description: "Tools, workflows, productivity" },
  { id: "infrastructure", label: "Infrastructure", description: "Cloud, servers, databases" },
  { id: "frontend", label: "Frontend & UI", description: "Components, design systems, accessibility" },
  { id: "backend", label: "Backend & APIs", description: "Services, integrations, performance" },
  { id: "security", label: "Security", description: "Authentication, authorization, compliance" },
  { id: "documentation", label: "Documentation", description: "Guides, tutorials, knowledge base" },
  { id: "other", label: "Other", description: "Ideas that don't fit other categories" },
];

const impactLevels = [
  { id: "low", label: "Low Impact", description: "Nice to have, affects few projects", color: "#627d98" },
  { id: "medium", label: "Medium Impact", description: "Useful improvement, affects some projects", color: "#ffab00" },
  { id: "high", label: "High Impact", description: "Significant benefit, affects many projects", color: "#00c853" },
];

const suggestedTags = [
  "AI", "React", "TypeScript", ".NET", "Docker", "Kubernetes", "AWS", "Azure",
  "Testing", "Performance", "Security", "Database", "API", "CLI", "Monitoring",
];

export function SubmitIdeaPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    impact: "",
    tags: [],
    problemStatement: "",
    proposedSolution: "",
  });

  const [newTag, setNewTag] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleAddTag = (tag) => {
    if (tag && !formData.tags.includes(tag) && formData.tags.length < 5) {
      setFormData((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newTag.trim()) {
      e.preventDefault();
      handleAddTag(newTag.trim());
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length < 10) {
      newErrors.title = "Title must be at least 10 characters";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 50) {
      newErrors.description = "Description must be at least 50 characters";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.impact) {
      newErrors.impact = "Please select an impact level";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // In a real app, you would send the data to your backend here
    console.log("Submitted idea:", formData);
  };

  if (submitSuccess) {
    return (
      <section className={classes.page}>
        <div className={classes.backgroundDecor}>
          <div className={classes.gradientOrb1} />
          <div className={classes.gradientOrb2} />
        </div>

        <div className={classes.container}>
          <div className={classes.successCard}>
            <div className={classes.successIcon}>
              <IconCheck size={48} />
            </div>
            <h1 className={classes.successTitle}>Idea Submitted Successfully!</h1>
            <p className={classes.successMessage}>
              Thank you for sharing your idea. Our team will review it and get back to you soon.
              You can track the status of your idea in the Innovation Hub.
            </p>
            <div className={classes.successActions}>
              <a href="/docs-dev/innovation" className={classes.primaryButton}>
                <IconBulb size={18} />
                View All Ideas
              </a>
              <button
                className={classes.secondaryButton}
                onClick={() => {
                  setSubmitSuccess(false);
                  setFormData({
                    title: "",
                    description: "",
                    category: "",
                    impact: "",
                    tags: [],
                    problemStatement: "",
                    proposedSolution: "",
                  });
                }}
              >
                <IconPlus size={18} />
                Submit Another Idea
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={classes.page}>
      {/* Decorative Background */}
      <div className={classes.backgroundDecor}>
        <div className={classes.gradientOrb1} />
        <div className={classes.gradientOrb2} />
        <div className={classes.floatingShapes}>
          <div className={classes.shape1} />
          <div className={classes.shape2} />
        </div>
      </div>

      <div className={classes.container}>
        {/* Back Link */}
        <a href="/docs-dev/innovation" className={classes.backLink}>
          <IconArrowLeft size={16} />
          Back to Innovation Hub
        </a>

        {/* Page Header */}
        <header className={classes.pageHeader}>
          <span className={classes.pageTag}>
            <IconSparkles size={16} />
            New Idea
          </span>
          <h1 className={classes.pageTitle}>Share Your Innovation</h1>
          <p className={classes.pageSubtitle}>
            Your ideas shape our future. Describe your proposal clearly to help others
            understand and vote on it.
          </p>
        </header>

        {/* Form Container */}
        <div className={classes.formLayout}>
          <form className={classes.form} onSubmit={handleSubmit}>
            {/* Title Field */}
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Idea Title <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                className={`${classes.input} ${errors.title ? classes.inputError : ""}`}
                placeholder="A clear, concise title for your idea"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                maxLength={100}
              />
              <div className={classes.fieldFooter}>
                {errors.title ? (
                  <span className={classes.errorMessage}>
                    <IconAlertCircle size={14} />
                    {errors.title}
                  </span>
                ) : (
                  <span className={classes.hint}>Make it descriptive and memorable</span>
                )}
                <span className={classes.charCount}>{formData.title.length}/100</span>
              </div>
            </div>

            {/* Description Field */}
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Description <span className={classes.required}>*</span>
              </label>
              <textarea
                className={`${classes.textarea} ${errors.description ? classes.inputError : ""}`}
                placeholder="Describe your idea in detail. What problem does it solve? How would it work?"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={5}
                maxLength={2000}
              />
              <div className={classes.fieldFooter}>
                {errors.description ? (
                  <span className={classes.errorMessage}>
                    <IconAlertCircle size={14} />
                    {errors.description}
                  </span>
                ) : (
                  <span className={classes.hint}>Minimum 50 characters</span>
                )}
                <span className={classes.charCount}>{formData.description.length}/2000</span>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className={classes.twoColumns}>
              {/* Category Dropdown */}
              <div className={classes.formGroup}>
                <label className={classes.label}>
                  Category <span className={classes.required}>*</span>
                </label>
                <div className={classes.dropdownWrapper}>
                  <button
                    type="button"
                    className={`${classes.dropdownTrigger} ${errors.category ? classes.inputError : ""}`}
                    onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  >
                    {formData.category ? (
                      <span>{categories.find((c) => c.id === formData.category)?.label}</span>
                    ) : (
                      <span className={classes.placeholder}>Select a category</span>
                    )}
                    <IconChevronDown size={18} />
                  </button>
                  {showCategoryDropdown && (
                    <div className={classes.dropdownMenu}>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          className={`${classes.dropdownItem} ${
                            formData.category === cat.id ? classes.dropdownItemActive : ""
                          }`}
                          onClick={() => {
                            handleInputChange("category", cat.id);
                            setShowCategoryDropdown(false);
                          }}
                        >
                          <span className={classes.dropdownItemLabel}>{cat.label}</span>
                          <span className={classes.dropdownItemDesc}>{cat.description}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {errors.category && (
                  <span className={classes.errorMessage}>
                    <IconAlertCircle size={14} />
                    {errors.category}
                  </span>
                )}
              </div>

              {/* Impact Level */}
              <div className={classes.formGroup}>
                <label className={classes.label}>
                  Expected Impact <span className={classes.required}>*</span>
                </label>
                <div className={classes.impactOptions}>
                  {impactLevels.map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      className={`${classes.impactOption} ${
                        formData.impact === level.id ? classes.impactOptionActive : ""
                      }`}
                      onClick={() => handleInputChange("impact", level.id)}
                      style={{
                        "--impact-color": level.color,
                      }}
                    >
                      <span className={classes.impactLabel}>{level.label}</span>
                    </button>
                  ))}
                </div>
                {errors.impact && (
                  <span className={classes.errorMessage}>
                    <IconAlertCircle size={14} />
                    {errors.impact}
                  </span>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className={classes.formGroup}>
              <label className={classes.label}>
                <IconTag size={16} />
                Tags
                <span className={classes.optional}>(optional, max 5)</span>
              </label>

              <div className={classes.tagsInput}>
                {formData.tags.map((tag) => (
                  <span key={tag} className={classes.tag}>
                    {tag}
                    <button
                      type="button"
                      className={classes.tagRemove}
                      onClick={() => handleRemoveTag(tag)}
                    >
                      <IconX size={12} />
                    </button>
                  </span>
                ))}
                {formData.tags.length < 5 && (
                  <input
                    type="text"
                    className={classes.tagInput}
                    placeholder={formData.tags.length === 0 ? "Add tags..." : ""}
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onBlur={() => {
                      if (newTag.trim()) handleAddTag(newTag.trim());
                    }}
                  />
                )}
              </div>

              <div className={classes.suggestedTags}>
                <span className={classes.suggestedLabel}>Suggested:</span>
                {suggestedTags
                  .filter((tag) => !formData.tags.includes(tag))
                  .slice(0, 8)
                  .map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={classes.suggestedTag}
                      onClick={() => handleAddTag(tag)}
                      disabled={formData.tags.length >= 5}
                    >
                      {tag}
                    </button>
                  ))}
              </div>
            </div>

            {/* Problem Statement (Optional) */}
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Problem Statement
                <span className={classes.optional}>(optional)</span>
              </label>
              <textarea
                className={classes.textarea}
                placeholder="What specific problem does this idea address? What pain points exist today?"
                value={formData.problemStatement}
                onChange={(e) => handleInputChange("problemStatement", e.target.value)}
                rows={3}
                maxLength={1000}
              />
              <div className={classes.fieldFooter}>
                <span className={classes.hint}>Help others understand the current challenges</span>
                <span className={classes.charCount}>{formData.problemStatement.length}/1000</span>
              </div>
            </div>

            {/* Proposed Solution (Optional) */}
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Proposed Solution
                <span className={classes.optional}>(optional)</span>
              </label>
              <textarea
                className={classes.textarea}
                placeholder="How do you envision this being implemented? Any technical considerations?"
                value={formData.proposedSolution}
                onChange={(e) => handleInputChange("proposedSolution", e.target.value)}
                rows={3}
                maxLength={1000}
              />
              <div className={classes.fieldFooter}>
                <span className={classes.hint}>Include technical details if relevant</span>
                <span className={classes.charCount}>{formData.proposedSolution.length}/1000</span>
              </div>
            </div>

            {/* Submit Actions */}
            <div className={classes.formActions}>
              <a href="/docs-dev/innovation" className={classes.cancelButton}>
                Cancel
              </a>
              <button
                type="submit"
                className={classes.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <IconLoader2 size={18} className={classes.spinner} />
                    Submitting...
                  </>
                ) : (
                  <>
                    <IconRocket size={18} />
                    Submit Idea
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Sidebar Tips */}
          <aside className={classes.sidebar}>
            <div className={classes.tipsCard}>
              <h3 className={classes.tipsTitle}>
                <IconInfoCircle size={18} />
                Tips for a Great Idea
              </h3>
              <ul className={classes.tipsList}>
                <li>
                  <strong>Be specific</strong> - Clearly define what you want to achieve
                </li>
                <li>
                  <strong>Explain the value</strong> - Why would this benefit the team?
                </li>
                <li>
                  <strong>Consider feasibility</strong> - Is this technically achievable?
                </li>
                <li>
                  <strong>Think big, start small</strong> - Break down large ideas into phases
                </li>
                <li>
                  <strong>Include examples</strong> - References or similar implementations help
                </li>
              </ul>
            </div>

            <div className={classes.processCard}>
              <h3 className={classes.processTitle}>What happens next?</h3>
              <div className={classes.processSteps}>
                <div className={classes.processStep}>
                  <div className={classes.stepNumber}>1</div>
                  <div className={classes.stepContent}>
                    <strong>Review</strong>
                    <span>Your idea will be reviewed by the innovation team</span>
                  </div>
                </div>
                <div className={classes.processStep}>
                  <div className={classes.stepNumber}>2</div>
                  <div className={classes.stepContent}>
                    <strong>Voting</strong>
                    <span>The community can vote and comment on your idea</span>
                  </div>
                </div>
                <div className={classes.processStep}>
                  <div className={classes.stepNumber}>3</div>
                  <div className={classes.stepContent}>
                    <strong>Implementation</strong>
                    <span>Top ideas get prioritized for development</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
