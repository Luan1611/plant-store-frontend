import { forwardRef, InputHTMLAttributes } from 'react'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const { label, ...rest } = props

    return (
      <div className={`input-group ${rest.className}`}>
        <label htmlFor={rest.name}>{label}</label>

        <textarea {...props} ref={ref} />
      </div>
    )
  }
)

export default TextArea
