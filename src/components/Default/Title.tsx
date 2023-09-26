interface TitleProps {
  title: string,
}
export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className={`text-center text-3xl font-bold mb-5`}>{props.title}</h1>
    </div>
  )
}