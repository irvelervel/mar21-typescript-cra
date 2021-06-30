import { useState, Dispatch, SetStateAction } from 'react'

interface FunctionalComponentProps {
  title: string
  subTitle?: string
}

const FunctionalComponent = ({ title, subTitle }: FunctionalComponentProps) => {
  const [name, setName] = useState('Mohammad')
  const [count, setCount] = useState<number | null>(null)

  return (
    <>
      <h1>{title}</h1>
      {subTitle && <h3>{subTitle}</h3>}
      <p onClick={() => setCount(5)}>{name}</p>
    </>
  )
}

export default FunctionalComponent
