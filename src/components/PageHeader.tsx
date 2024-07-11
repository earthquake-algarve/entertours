import { ReactNode } from "react"

export function PageHeader({ children }: { children: ReactNode }) {
  return <div className="text-4xl mb-8 ">{children}</div>
}