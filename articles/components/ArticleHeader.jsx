import React, { useState, useEffect } from 'react'

const THEME_KEY = 'articleTheme'

export default function ArticleHeader() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY) || 'dark'
      setTheme(saved)
    } catch {}
  }, [])

  useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light')
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {}
  }, [theme])

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <header className="block main_page_background">
      <div className="container">
        <div className="header">
          <div className="article-header__left">
            <a className="logo" href="/" aria-label="Logo">Логотип</a>
            <button type="button" className="article-header__sun" aria-label="Сменить тему" onClick={toggle}>
              <img
                src={theme === 'light' ? '../../../image/moonstarssvgrepocom1.svg' : '../../../image/sun2svgrepocom1.svg'}
                alt=""
                width="28"
                height="28"
              />
            </button>
          </div>
          <nav className="menu" aria-label="Main menu">
            <a className="menu__item" href="/pages/themes/">темы</a>
            <a className="menu__item" href="/pages/glossary/">глоссарий</a>
            <a className="menu__item" href="/pages/articles/">статьи</a>
            <a className="menu__item" href="/pages/quiz/">квизы</a>
            <a className="menu__item" href="#">о медиа</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
