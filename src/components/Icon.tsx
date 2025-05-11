import '../styles/Icon.css'

type IconProps = {
  name: string
  icon: string
}

const Icon = ({ name, icon }: IconProps) => {
  return (
    <div className='icon'>
      <img src={icon} alt={name} />
    </div>
  )
}
export default Icon
