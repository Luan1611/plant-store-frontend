import '../styles/TextContainer.css'

interface TextContainerProps {
  text: string
}

const TextContainer = ({ text }: TextContainerProps) => {
  return (
    <div className='text'>
      <p>{text}</p>
    </div>
  )
}
export default TextContainer
