import React, { useEffect, useState } from 'react'
import { fetchArticles } from '../../scripts/airtable.js'

export default function ArticleReco({ currentTitle }) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles()
      .then(all => {
        const filtered = all
          .filter(a => a.type === 'Статья' && a.title !== currentTitle)
          .slice(0, 3)
        setArticles(filtered)
      })
      .catch(() => {})
  }, [])

  if (!articles.length) return null

  return (
    <section className="article-reco" aria-label="Рекомендуем почитать">
      <h2 className="article-reco__title">РЕКОМЕНДУЕМ ПОЧИТАТЬ</h2>
      <div className="article-reco__list">
        {articles.map(article => (
          <a key={article.id} className="article-reco__card" href="#">
            <div className="article-reco__media">
              <div className="article-reco__time">
                <span className="article-reco__time-text">{article.readTime}</span>
                <img className="article-reco__time-icon" src="/image/ICONS2.svg" alt="" width="22" height="22" />
              </div>
            </div>
            <div className="article-reco__body">
              <div className="article-reco__card-title">{article.title}</div>
              <div className="article-reco__card-text">{article.subcategory || article.category}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
