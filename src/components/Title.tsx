import '../styles/Title.css'

interface TitleProps {
  title?: string
  subtitle?: string
}

const Title = ({ title, subtitle }: TitleProps) => {
  if (title) {
    const titleWithBold = title.split('**')
    const titleElement: JSX.Element = (
      <h1>
        {titleWithBold.map((text, index) => {
          if (index % 2 === 0) {
            return text
          } else {
            return <strong key={index}>{text}</strong>
          }
        })}
      </h1>
    )

    return <div className='title'>{titleElement}</div>
  }

  if (subtitle) {
    return <h2 className='subtitle'>{subtitle}</h2>
  }
}
export default Title
