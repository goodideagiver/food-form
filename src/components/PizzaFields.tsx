import { useField } from 'formik'

export const PizzaFields = () => {
  const [slices] = useField('no_of_slices')
  const [diameter] = useField('diameter')

  return (
    <>
      <label>
        <span>Number of slices:</span>
        <input {...slices} type='number' />
      </label>
      <label>
        <span>Diameter:</span>
        <input {...diameter} type='number' />
      </label>
    </>
  )
}
