import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { label, ...rest } = props

    return (
      <div className={`input-group ${rest.className || ''}`}>
        {rest.type !== 'radio' && <label htmlFor={rest.name}>{label}</label>}

        <input {...rest} ref={ref} required />

        {rest.type === 'radio' && (
          <label className='plantLabel' htmlFor={rest.name}>
            {label}
          </label>
        )}
      </div>
    )
  }
)

export default Input
