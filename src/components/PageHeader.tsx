import { ReactNode } from "react"

export function PageHeader({ children }: { children: ReactNode }) {
  return <div className="text-3xl mb-8 flex justify-between">{children}</div>
}