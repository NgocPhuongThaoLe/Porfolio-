export type Project = {
  id: string
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  status: 'Coming soon' | 'In progress' | 'Completed'
}