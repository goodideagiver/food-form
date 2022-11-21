type Pizza = {
  no_of_slices: number
  diameter: number
}

type Soup = {
  spiciness_scale: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

type Sandwich = {
  slices_of_bread: number
}

export type Dish = 'Pizza' | 'Soup' | 'Sandwich' | 'unset'

export type FormFields = {
  name: string
  preparationTime: string
  dishType: Dish
  no_of_slices: number
  diameter: number
  spiciness_scale: '' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  slices_of_bread: number
}
