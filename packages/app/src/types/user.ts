export interface UserData {
  fullName: string
  email: string
  avatar: string
}

export interface IndividualUserInput {
  type: 'individual'
  name: string
  email: string
  avatar?: string
}

export interface LegalUserInput {
  type: 'legal'
  companyName: string
  email: string
  logo?: string
}

export type UserInput = IndividualUserInput | LegalUserInput
