import '../styles/Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <button className='button' {...rest}>
      {text}
    </button>
  )
}

export default Button
