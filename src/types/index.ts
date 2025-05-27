export type User = {
  id: number
  name: string
  email: string
}

export const SortField = {
  NAME: 'name',
  EMAIL: 'email',
} as const

export type SortField = (typeof SortField)[keyof typeof SortField]
