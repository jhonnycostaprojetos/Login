

interface UserProps {
  name: string,
}
export default function User(props: UserProps) {

  return (
    <div>
      <span className={`flex uppercase font-black text-xs text-gray-900 dark:text-gray-100 p-2 mr-10`}>Bem vindo: {props.name}</span>
    </div>
  )
}