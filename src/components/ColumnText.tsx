import Icon from './Icon'
import TextContainer from './TextContainer'
import Title from './Title'

interface ColumnTextProps {
  title: string
  text: string
  icon: string
  image: string
  children?: React.ReactNode
}

const ColumnText = ({
  title,
  text,
  icon,
  image,
  children,
}: ColumnTextProps) => {
  return (
    <div className='column'>
      <div className='steps-container'>
        <div className='step'>
          <Icon name='Water Icon' icon={icon} />
          <Title subtitle={title} />
          <TextContainer text={text} />
        </div>

        <div className='image-container'>
          <img src={image} alt='a' />

          {children}
        </div>
      </div>
    </div>
  )
}
export default ColumnText
