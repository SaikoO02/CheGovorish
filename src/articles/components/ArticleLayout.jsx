import React, { useEffect } from 'react'
import ArticleHeader from './ArticleHeader.jsx'
import ArticleReco from './ArticleReco.jsx'

export default function ArticleLayout({
  title,
  subtitle,
  date,
  dateDisplay,
  readTime,
  coverSrc,
  coverInvertLight = false,
  nextHref = '#',
  children
}) {
  useEffect(() => {
    document.body.classList.add('page-article')
    document.body.id = 'page-top'

    const container = document.getElementById('footer-container')
    if (container && !container.innerHTML) {
      const candidates = ['footer/footer.html', '../footer/footer.html', '../../footer/footer.html', '../../../footer/footer.html']
      const tryNext = i =>
        fetch(candidates[i])
          .then(r => {
            if (!r.ok) throw new Error(`HTTP ${r.status} for ${candidates[i]}`)
            return r.text().then(html => ({ html, loadedFrom: candidates[i] }))
          })
          .catch(err => {
            if (i + 1 < candidates.length) return tryNext(i + 1)
            throw err
          })

      tryNext(0)
        .then(({ html, loadedFrom }) => {
          container.innerHTML = html
          const prefix = loadedFrom.slice(0, loadedFrom.length - 'footer/footer.html'.length)
          container.querySelectorAll('[src]').forEach(el => {
            const src = el.getAttribute('src')
            if (src && src.startsWith('image/')) el.setAttribute('src', prefix + src)
          })
          const vectorImg = container.querySelector('.footer__vector img')
          if (!vectorImg) return
          return fetch(vectorImg.getAttribute('src'))
            .then(r => r.text())
            .then(svgText => { vectorImg.parentElement.innerHTML = svgText })
        })
        .catch(() => {})
    }

    return () => {
      document.body.classList.remove('page-article')
    }
  }, [])

  const handleBack = e => {
    if (window.history.length > 1) {
      e.preventDefault()
      window.history.back()
    }
  }

  const handleTop = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <ArticleHeader />
      <main className="container">
        <article className="article-page">
          <h1 className="article-page__title">{title}</h1>
          {subtitle && <p className="article-page__meta">{subtitle}</p>}

          <div className="article-page__byline">
            <time className="article-page__date" dateTime={date}>{dateDisplay}</time>
            <div className="article-page__read">
              <img className="article-page__read-icon" src="../../../image/ICONS2.svg" alt="" width="26" height="26" />
              <span className="article-page__read-time">{readTime}</span>
            </div>
          </div>

          {coverSrc && (
            <figure className="article-page__figure">
              <img
                className={`article-page__cover${coverInvertLight ? ' article-page__cover--invert-light' : ''}`}
                src={coverSrc}
                alt=""
              />
            </figure>
          )}

          <div className="article-page__body">
            {children}
          </div>

          <nav className="article-page__bottom-nav" aria-label="Навигация по статье">
            <a href="../../../pages/themes/" className="article-page__nav-icon article-page__nav-back" aria-label="К списку тем" onClick={handleBack}>
              <img className="article-page__nav-img" src="../../../image/ICONS3.svg" alt="" width="43" height="43" />
            </a>
            <div className="article-page__bottom-nav-right">
              <a href="#page-top" className="article-page__nav-icon article-page__nav-top" aria-label="Наверх" onClick={handleTop}>
                <img className="article-page__nav-img article-page__nav-img--top" src="../../../image/ICONS3.svg" alt="" width="43" height="43" />
              </a>
              <a href={nextHref} className="article-page__nav-next">СЛЕДУЮЩАЯ СТАТЬЯ</a>
            </div>
          </nav>

          <ArticleReco currentTitle={title} />
        </article>
      </main>
      <div id="footer-container"></div>
    </>
  )
}
