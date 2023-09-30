'use client';

import Link from "next/link"

interface MenuItemProps {
  url?: string,
  texto: string,
  icone: any,
  className?: string,
  click?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {

  function renderizarLink() {
    return (
      <>
        {props.icone}
        <span className={`text-xs font-light `}>
          {props.texto}
        </span>
      </>
    )
  }
  return (

    <li onClick={props.click} className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}>
      {props.url ? (
        <Link href={props.url} className={`flex flex-col justify-center items-center
             h-20 w-20 dark:text-gray-200 text-gray-600 ${props.className}`}>
          {renderizarLink()}
        </Link>
      ) : (
        renderizarLink()
      )}
    </li>

  )
}