import React, { useState } from "react";
import classes from "./styles.module.css";
import {
  IconAlertCircle,
  IconArrowLeft,
  IconBold,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconCode,
  IconEye,
  IconH1,
  IconInfoCircle,
  IconItalic,
  IconLink,
  IconList,
  IconListNumbers,
  IconLoader2,
  IconMessage,
  IconMessageCircle,
  IconPhoto,
  IconQuestionMark,
  IconQuote,
  IconSend,
  IconSparkles,
  IconTag,
  IconUsers,
  IconX,
} from "@tabler/icons-react";

const categories = [
  {
    id: "best-practice",
    label: "Best Practice",
    description: "Share coding standards, patterns, and proven solutions",
    icon: IconCode,
    color: "#3385ff"
  },
  {
    id: "innovation",
    label: "Innovation",
    description: "Propose new ideas, tools, or improvements",
    icon: IconBulb,
    color: "#00c853"
  },
  {
    id: "question",
    label: "Question",
    description: "Ask for help or advice from the community",
    icon: IconQuestionMark,
    color: "#ffab00"
  },
  {
    id: "discussion",
    label: "Discussion",
    description: "Start a conversation about any tech topic",
    icon: IconMessageCircle,
    color: "#00d4ff"
  },
];

const suggestedTags = [
  "React", "TypeScript", ".NET", "Docker", "AWS", "Azure", "Kubernetes",
  "PostgreSQL", "MongoDB", "GraphQL", "REST", "CI/CD", "Testing", "Security",
  "Performance", "Architecture", "Microservices", "Frontend", "Backend",
];

export function NewDiscussionPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    tags: [],
  });

  const [newTag, setNewTag] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("write");

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

  const insertMarkdown = (syntax, placeholder = "") => {
    const textarea = document.getElementById("discussion-content");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end) || placeholder;

    let newText;
    let cursorPos;

    switch (syntax) {
      case "bold":
        newText = `**${selectedText}**`;
        cursorPos = start + 2;
        break;
      case "italic":
        newText = `*${selectedText}*`;
        cursorPos = start + 1;
        break;
      case "code":
        newText = selectedText.includes("\n")
          ? `\`\`\`\n${selectedText}\n\`\`\``
          : `\`${selectedText}\``;
        cursorPos = start + (selectedText.includes("\n") ? 4 : 1);
        break;
      case "link":
        newText = `[${selectedText}](url)`;
        cursorPos = start + selectedText.length + 3;
        break;
      case "heading":
        newText = `## ${selectedText}`;
        cursorPos = start + 3;
        break;
      case "quote":
        newText = `> ${selectedText}`;
        cursorPos = start + 2;
        break;
      case "list":
        newText = `- ${selectedText}`;
        cursorPos = start + 2;
        break;
      case "numbered":
        newText = `1. ${selectedText}`;
        cursorPos = start + 3;
        break;
      default:
        return;
    }

    const newContent =
      formData.content.substring(0, start) +
      newText +
      formData.content.substring(end);

    handleInputChange("content", newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(cursorPos, cursorPos + selectedText.length);
    }, 0);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length < 10) {
      newErrors.title = "Title must be at least 10 characters";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    } else if (formData.content.length < 30) {
      newErrors.content = "Content must be at least 30 characters";
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

    console.log("Submitted discussion:", formData);
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
            <h1 className={classes.successTitle}>Discussion Created!</h1>
            <p className={classes.successMessage}>
              Your discussion has been posted successfully. The community can now
              view, reply, and engage with your topic.
            </p>
            <div className={classes.successActions}>
              <a href="/docs-dev/forum" className={classes.primaryButton}>
                <IconMessageCircle size={18} />
                View All Discussions
              </a>
              <button
                className={classes.secondaryButton}
                onClick={() => {
                  setSubmitSuccess(false);
                  setFormData({
                    title: "",
                    category: "",
                    content: "",
                    tags: [],
                  });
                }}
              >
                <IconSend size={18} />
                Start Another Discussion
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const selectedCategory = categories.find((c) => c.id === formData.category);

  return (
    <section className={classes.page}>
      {/* Decorative Background */}
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

        {/* Page Header */}
        <header className={classes.pageHeader}>
          <span className={classes.pageTag}>
            <IconUsers size={16} />
            New Discussion
          </span>
          <h1 className={classes.pageTitle}>Start a Conversation</h1>
          <p className={classes.pageSubtitle}>
            Share knowledge, ask questions, or spark discussions with the developer community.
          </p>
        </header>

        {/* Form Container */}
        <div className={classes.formLayout}>
          <form className={classes.form} onSubmit={handleSubmit}>
            {/* Category Selection */}
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Category <span className={classes.required}>*</span>
              </label>
              <div className={classes.categoryGrid}>
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`${classes.categoryCard} ${
                        formData.category === cat.id ? classes.categoryCardActive : ""
                      }`}
                      onClick={() => handleInputChange("category", cat.id)}
                      style={{ "--category-color": cat.color }}
                    >
                      <div className={classes.categoryCardIcon}>
                        <Icon size={22} />
                      </div>
                      <div className={classes.categoryCardContent}>
                        <span className={classes.categoryCardLabel}>{cat.label}</span>
                        <span className={classes.categoryCardDesc}>{cat.description}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.category && (
                <span className={classes.errorMessage}>
                  <IconAlertCircle size={14} />
                  {errors.category}
                </span>
              )}
            </div>

            {/* Title Field */}
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Title <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                className={`${classes.input} ${errors.title ? classes.inputError : ""}`}
                placeholder="What's your discussion about?"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                maxLength={150}
              />
              <div className={classes.fieldFooter}>
                {errors.title ? (
                  <span className={classes.errorMessage}>
                    <IconAlertCircle size={14} />
                    {errors.title}
                  </span>
                ) : (
                  <span className={classes.hint}>Be specific and clear</span>
                )}
                <span className={classes.charCount}>{formData.title.length}/150</span>
              </div>
            </div>

            {/* Content Editor */}
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Content <span className={classes.required}>*</span>
              </label>

              <div className={classes.editorContainer}>
                {/* Editor Toolbar */}
                <div className={classes.editorToolbar}>
                  <div className={classes.toolbarTabs}>
                    <button
                      type="button"
                      className={`${classes.tabButton} ${activeTab === "write" ? classes.tabButtonActive : ""}`}
                      onClick={() => setActiveTab("write")}
                    >
                      Write
                    </button>
                    <button
                      type="button"
                      className={`${classes.tabButton} ${activeTab === "preview" ? classes.tabButtonActive : ""}`}
                      onClick={() => setActiveTab("preview")}
                    >
                      <IconEye size={14} />
                      Preview
                    </button>
                  </div>

                  {activeTab === "write" && (
                    <div className={classes.toolbarActions}>
                      <button type="button" className={classes.toolbarButton} onClick={() => insertMarkdown("heading", "Heading")} title="Heading">
                        <IconH1 size={16} />
                      </button>
                      <button type="button" className={classes.toolbarButton} onClick={() => insertMarkdown("bold", "bold text")} title="Bold">
                        <IconBold size={16} />
                      </button>
                      <button type="button" className={classes.toolbarButton} onClick={() => insertMarkdown("italic", "italic text")} title="Italic">
                        <IconItalic size={16} />
                      </button>
                      <div className={classes.toolbarDivider} />
                      <button type="button" className={classes.toolbarButton} onClick={() => insertMarkdown("code", "code")} title="Code">
                        <IconCode size={16} />
                      </button>
                      <button type="button" className={classes.toolbarButton} onClick={() => insertMarkdown("link", "link text")} title="Link">
                        <IconLink size={16} />
                      </button>
                      <button type="button" className={classes.toolbarButton} onClick={() => insertMarkdown("quote", "quote")} title="Quote">
                        <IconQuote size={16} />
                      </button>
                      <div className={classes.toolbarDivider} />
                      <button type="button" className={classes.toolbarButton} onClick={() => insertMarkdown("list", "item")} title="Bullet List">
                        <IconList size={16} />
                      </button>
                      <button type="button" className={classes.toolbarButton} onClick={() => insertMarkdown("numbered", "item")} title="Numbered List">
                        <IconListNumbers size={16} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Editor Content */}
                {activeTab === "write" ? (
                  <textarea
                    id="discussion-content"
                    className={`${classes.editorTextarea} ${errors.content ? classes.inputError : ""}`}
                    placeholder="Share your thoughts, questions, or insights...

Markdown is supported:
- **bold** and *italic* text
- `code` and code blocks
- [links](url)
- > quotes
- Lists and more!"
                    value={formData.content}
                    onChange={(e) => handleInputChange("content", e.target.value)}
                    rows={12}
                  />
                ) : (
                  <div className={classes.previewPane}>
                    {formData.content ? (
                      <div className={classes.previewContent}>
                        {/* Simple markdown preview - in production use a proper markdown renderer */}
                        {formData.content.split('\n').map((line, i) => (
                          <p key={i}>{line || <br />}</p>
                        ))}
                      </div>
                    ) : (
                      <div className={classes.previewEmpty}>
                        Nothing to preview yet. Start writing!
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className={classes.fieldFooter}>
                {errors.content ? (
                  <span className={classes.errorMessage}>
                    <IconAlertCircle size={14} />
                    {errors.content}
                  </span>
                ) : (
                  <span className={classes.hint}>Markdown formatting is supported</span>
                )}
                <span className={classes.charCount}>{formData.content.length} characters</span>
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
                    placeholder={formData.tags.length === 0 ? "Add relevant tags..." : ""}
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
                <span className={classes.suggestedLabel}>Popular:</span>
                {suggestedTags
                  .filter((tag) => !formData.tags.includes(tag))
                  .slice(0, 10)
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

            {/* Submit Actions */}
            <div className={classes.formActions}>
              <a href="/docs-dev/forum" className={classes.cancelButton}>
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
                    Posting...
                  </>
                ) : (
                  <>
                    <IconSend size={18} />
                    Post Discussion
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
                Writing Great Discussions
              </h3>
              <ul className={classes.tipsList}>
                <li>
                  <strong>Clear title</strong> - Summarize your topic in one line
                </li>
                <li>
                  <strong>Provide context</strong> - Include relevant background information
                </li>
                <li>
                  <strong>Be specific</strong> - The more detail, the better responses
                </li>
                <li>
                  <strong>Use formatting</strong> - Code blocks and lists improve readability
                </li>
                <li>
                  <strong>Add tags</strong> - Help others discover your discussion
                </li>
              </ul>
            </div>

            <div className={classes.guidelinesCard}>
              <h3 className={classes.guidelinesTitle}>Community Guidelines</h3>
              <ul className={classes.guidelinesList}>
                <li>Be respectful and constructive</li>
                <li>Search before posting duplicates</li>
                <li>Mark solutions when found</li>
                <li>Keep discussions on-topic</li>
              </ul>
            </div>

            {selectedCategory && (
              <div className={classes.categoryInfoCard} style={{ "--category-color": selectedCategory.color }}>
                <div className={classes.categoryInfoIcon}>
                  <selectedCategory.icon size={24} />
                </div>
                <h3 className={classes.categoryInfoTitle}>{selectedCategory.label}</h3>
                <p className={classes.categoryInfoDesc}>{selectedCategory.description}</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
