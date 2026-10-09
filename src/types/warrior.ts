export type WarriorType = 'Orco' | 'Uruk'

export type WarriorCategory =
  | 'Capitán'
  | 'Berserker'
  | 'Explorador'
  | 'Asediador'

export interface NewWarrior {
  name: string
  type: WarriorType
  combatLevel: number
  category: WarriorCategory
  threat: number
}

export interface Warrior extends NewWarrior {
  id: string
}