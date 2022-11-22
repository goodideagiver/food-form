import { useField } from 'formik'

export const SandwichFields = () => {
  const [field] = useField('slices_of_bread')

  return (
    <label>
      <span>Slices of bread:</span>
      <input type='number' {...field} />
    </label>
  )
}
