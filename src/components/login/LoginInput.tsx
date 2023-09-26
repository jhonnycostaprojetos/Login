'use client';
interface LoginInputProps {
  label: string,
  value: any,
  icon?: any,
  required?: boolean,
  type?: 'text' | 'email' | 'password'
  valueChange: (newValue: any) => void
  button?: any
}

export default function LoginInput(props: LoginInputProps) {
  return (
    <div className={`flex flex-col mt-4`}>
      <label>{props.label}</label>
      <input
        required={props.required}
        type={props.type ?? 'text'}
        value={props.value}
        onChange={e => props.valueChange?.(e.target.value)}
        className={`px-10 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white`}
      />
      <span className="absolute mt-12 ml-2 w-1 ">{props.icon}</span>
    </div>
  )
}