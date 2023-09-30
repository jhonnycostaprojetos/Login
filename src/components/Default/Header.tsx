'use client'
import useAppData from "@/data/hooks/useAppData";
import Title from "./Title";
import ButtonChangeTheme from "./ButtonChangeTheme";
import User from "./User";
import { useEffect, useState } from "react";

interface HeaderProps {
  title: string,
  subtitle: string,
}

export default function Header(props: HeaderProps) {
  const { theme, changeTheme } = useAppData()
  const [name, setName] = useState('')
  useEffect(() => {
    const repoStorage = localStorage.getItem('user');
    if (repoStorage) {
      setName(repoStorage);
    }
  }, []);
  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle}></Title>
      <div className={`flex flex-grow justify-end`}>
        <User name={name}></User>
        <ButtonChangeTheme theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  )
}