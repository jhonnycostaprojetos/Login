'use client';

import Header from "./Header";
import Body from "./Body";
import MenuRight from "./MenuRight";
import useAppData from "@/data/hooks/useAppData";
import { AppProvider } from "@/data/context/AppContext";

interface LayoutProps {
  title: string,
  subtitle: string,
  children?: any
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();
  return (
    <div className={`${theme} flex h-screen w-screen `}>
      <MenuRight />
      <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
        <Header title={props.title} subtitle={props.subtitle}></Header>
        <Body>{props.children}</Body>

      </div>


    </div>
  )
}