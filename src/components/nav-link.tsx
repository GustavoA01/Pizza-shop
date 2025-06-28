import { Link, useLocation, type LinkProps } from "react-router-dom"

export type NavLinkProps = LinkProps

export const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex data-[current=true]:text-foreground items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      {...props}
    />
  )
}
