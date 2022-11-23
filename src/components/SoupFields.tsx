import { useField } from 'formik'

export const SoupFields = () => {
  const [field] = useField('spiciness_scale')

  const spicinessComment = [
    'Not spicy at all 🥶',
    ,
    'A little spicy',
    ,
    'Some spice',
    ,
    'Almost mildly spicy',
    ,
    'Mildly spicy',
    ,
    'Spicy',
    ,
    'Very spicy',
    ,
    'Extremely spicy',
    ,
    'Hot',
    'Very hot 🔥',
  ]
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
        <span>{spicinessComment[+value]}</span>
      </div>
    </>
  )
}
