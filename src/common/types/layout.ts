export interface Sidebar {
  isParent: boolean
  ishavechild: boolean
  title: string
  icon: string
  path: string
  children?: Sidebar[]
}
