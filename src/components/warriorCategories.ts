import { Axe, Binoculars, Castle, Shield, type LucideIcon } from 'lucide-react'
import type { WarriorCategory } from '../types/warrior'

export const warriorCategories: { value: WarriorCategory; Icon: LucideIcon }[] = [
  { value: 'Capitán', Icon: Shield },
  { value: 'Berserker', Icon: Axe },
  { value: 'Explorador', Icon: Binoculars },
  { value: 'Asediador', Icon: Castle },
]