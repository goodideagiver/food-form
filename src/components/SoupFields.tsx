import { useField } from 'formik'

export const SoupFields = () => {
  const [field] = useField('spiciness_scale')

  const spicinessComment = {
    1: 'Not spicy at all 🥶',
    2: 'A little spicy',
    3: 'Some spice',
    4: 'Almost mildly spicy',
    5: 'Mildly spicy',
    6: 'Spicy',
    7: 'Very spicy',
    8: 'Extremely spicy',
    9: 'Hot',
    10: 'Very hot 🔥',
  }

  const value: string = field.value.toString()

  return (
    <>
      <label>
        <span>Spiciness scale:</span>
        <input min='1' max='10' type='range' {...field} />
      </label>
      <div
        style={{
          backgroundColor: `rgba(${(250 / 10) * Number(value)},140,${
            250 / Number(value)
          })`,
        }}
        className='spice-comment'
      >
        <span>{value}</span>
        <span>{spicinessComment[value]}</span>
      </div>
    </>
  )
}
