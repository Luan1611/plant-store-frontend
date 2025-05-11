import { OrbitProgress, OrbitProgressProps } from 'react-loading-indicators'

const Loading = (props: OrbitProgressProps) => {
  const { text } = props

  props = { ...props, text: '' }

  return (
    <div className='loading'>
      <OrbitProgress {...props} />

      {text && <div>{text}</div>}
    </div>
  )
}
export default Loading
