import React, { useEffect, useState } from 'react'
import { fetchArticles } from '../../scripts/airtable.js'

const CATEGORY_IMAGES = {
  'Backend/frontend-разработка': '../../../image/image30.svg',
  'DevOps-инженерия': '../../../image/image403.png',
  'Гейм-разработка': '../../../image/image42.svg',
  'Тестирование': '../../../image/image45.svg',
  'UX/UI и Web дизайн': '../../../image/image10.svg',
  'Motion дизайн': '../../../image/image17.svg',
  'Продуктовый дизайн': '../../../image/image1.svg',
  'Проджект менеджмент': '../../../image/image701.svg',
  'Продукт менеджмент': '../../../image/image699.svg',
  'Тимлидерство': '../../../image/image713.svg',
}
const FALLBACK_IMAGE = '../../../image/image10.svg'

function getCategoryImage(article) {
  const key = article.subcategory || article.category
  return CATEGORY_IMAGES[key] || FALLBACK_IMAGE
}

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
            <div className="article-reco__media" style={{ '--reco-bg': `url(${getCategoryImage(article)})` }}>
              <div className="article-reco__time">
                <span className="article-reco__time-text">{article.readTime}</span>
                <img className="article-reco__time-icon" src="../../../image/ICONS2.svg" alt="" width="22" height="22" />
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
