import { Dish, FormFields } from './formTypes'

const validateSoup = (values: FormFields) => {
  if (!values.spiciness_scale) {
    throw new Error('Soup must have spiciness scale')
  }

  if (values.spiciness_scale > 10 || values.spiciness_scale < 1) {
    throw new Error('Spiciness scale must be between 1 and 10')
  }
}

const validatePizza = (values: FormFields) => {
  if (!values.diameter) {
    throw new Error('Pizza must have diameter')
  }

  if (typeof values.diameter !== 'number' || isNaN(+values.diameter)) {
    throw new Error('Diameter must be a number')
  }

  if (
    !values.no_of_slices ||
    values.no_of_slices < 0 ||
    isNaN(+values.no_of_slices)
  ) {
    throw new Error('Number of slices must be a positive number')
  }
}

const validateSandwich = (values: FormFields) => {
  if (!values.slices_of_bread) {
    throw new Error('Sandwich must have slices of bread')
  }

  if (isNaN(+values.slices_of_bread)) {
    throw new Error('Slices of bread must be a number')
  }

  if (values.slices_of_bread < 1) {
    throw new Error('Sandwich must have at least 1 slice of bread')
  }
}

const validators = {
  Soup: validateSoup,
  Pizza: validatePizza,
  Sandwich: validateSandwich,
}

export const formSubmitHandler = async (values: FormFields, dishType: Dish) => {
  if (dishType === 'unset') return
  try {
    validators[dishType](values)
  } catch (error) {
    if (error instanceof Error) alert(error.message)
    return
  }

  alert('Form is valid')
}
