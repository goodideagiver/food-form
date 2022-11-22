import { Dish } from '../formTypes'
import { PizzaFields } from './PizzaFields'
import { SandwichFields } from './SandwichFields'
import { SoupFields } from './SoupFields'

type Props = {
  dishType: Dish
}

export const FormChoices = ({ dishType }: Props) => {
  if (dishType === 'unset') return null

  const dishOptions = {
    Pizza: <PizzaFields />,
    Soup: <SoupFields />,
    Sandwich: <SandwichFields />,
  }

  return dishOptions[dishType] || null
}
