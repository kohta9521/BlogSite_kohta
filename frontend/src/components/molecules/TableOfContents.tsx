import React from 'react'

// scss
import styles from './styles/TableOfContents.module.scss'

// hooks
import useTableOfContents from '@/hooks/useTableOfContents'

const TableOfContents = () => {
  const headings = useTableOfContents()

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.toc}>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={styles[`level${heading.level}`]}>
            <a onClick={() => handleClick(heading.id)}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
