'use client';
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { IconeAjuste, IconeCasa, IconeSair, IconeSino } from "../Icons";

export default function MenuRight() {
  return (
    <aside className={`flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200`}>
      <div className={`flex flex-col items-center justify-center h-20 w-20 p-2`}>
        <Logo></Logo>
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/painelAdm" texto="Inicio" icone={IconeCasa}></MenuItem>
        <MenuItem url="/config" texto="Ajuste" icone={IconeAjuste}></MenuItem>
        <MenuItem url="/notificacoes" texto="Notificacoes" icone={IconeSino}></MenuItem>
      </ul>

      <ul>
        <MenuItem url="/" texto="Sair" icone={IconeSair}
          click={() => console.log('sair')} className={`text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white `}></MenuItem>
      </ul>
    </aside>
  )
}