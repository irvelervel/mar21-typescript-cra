import { useState } from 'react'
import { Book } from '../types/interfaces'

interface FunctionalComponentProps {
  title: string
  subTitle?: string
  books: Book[]
}

const FunctionalComponent = ({ title, subTitle, books }: FunctionalComponentProps) => {
  const [name, setName] = useState('Mohammad')
  const [count, setCount] = useState<number | null>(null)

  return (
    <>
      <h1>{title}</h1>
      {subTitle && <h3>{subTitle}</h3>}
      <p onClick={() => setCount(5)}>{name}</p>
      {books.map((book) => (
        <div>{book.title}</div>
      ))}
    </>
  )
}

export default FunctionalComponent
