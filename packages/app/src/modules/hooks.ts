import { useEffect } from "react"
import { useAppDispatch } from "../store/hooks"
import { bindMenu, unbindMenu } from "../store/slices/sidebar"
import { ModuleNames } from "./type"
import { SidebarMenu } from "../types/sidebar"


export function useAutoBindSidebarMenue(key: ModuleNames, menu?: SidebarMenu) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(bindMenu({ key, menu }))
    return () => { dispatch(unbindMenu({ key })) }
  }, [])
}