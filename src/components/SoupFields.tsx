import { useField } from 'formik'

export const SoupFields = () => {
  const [field] = useField('spiciness_scale')

  return (
    <>
      <label>
        <span>Spiciness scale:</span>
        <p>{field.value}</p>
        <input min='1' max='10' type='range' {...field} />
      </label>
    </>
  )
}
