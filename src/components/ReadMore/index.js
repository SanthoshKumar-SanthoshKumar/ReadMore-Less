// Write your code here
import {useState} from 'react'

import {
  Container,
  Heading,
  About,
  HookImage,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [isExpanded, setIsExpanded] = useState(false)

  const {reactHooksDescription} = props
  const inintialLength = 170

  const toggledRreadMore = () => {
    setIsExpanded(prevState => !prevState)
  }

  const truncateText = (text, num) => {
    return text.length > num ? text.slice(0, num) : text
  }

  return (
    <>
      <Container>
        <Heading>React Hooks</Heading>
        <About>Hooks are a new addition to React</About>
        <HookImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {isExpanded
            ? reactHooksDescription
            : truncateText(reactHooksDescription, inintialLength)}
        </Description>
        <Button onClick={toggledRreadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </Button>
      </Container>
    </>
  )
}

export default ReadMore
