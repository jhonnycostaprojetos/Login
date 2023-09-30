interface BodyProps {
  children?: any
}

export default function Body(props: BodyProps) {
  return (
    <div className={`flex flex-col mt-7 dark:text-gray-100`}>
      {props.children}
    </div>
  )
}