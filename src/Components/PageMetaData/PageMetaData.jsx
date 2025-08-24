import React from "react";

export default function PageMetaData({
  title = "Mohammed Hedia - Frontend Developer",
  description = "Portfolio of Mohammed Hedia showcasing modern web development projects using React, TypeScript, and TailwindCSS.",
  keywords = "Mohammed Hedia, Frontend Developer, React, TypeScript, JavaScript, Portfolio, Web Development, UI, UX",
  author = "Mohammed Hedia",
  image = "",
  url = "",
}) {
  return (
    <>
      <title>{title}</title>

      {/* Basic Meta */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
