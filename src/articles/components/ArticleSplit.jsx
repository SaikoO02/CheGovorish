import React from 'react'

export default function ArticleSplit({ heading, children }) {
  return (
    <section className="article-page__split">
      <h2 className="article-page__split-heading">{heading}</h2>
      <div className="article-page__split-content">
        {children}
      </div>
    </section>
  )
}
