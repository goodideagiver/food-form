import { useField } from 'formik'
import { PizzaDiameterDisplay } from './PizzaDiameterDisplay'

export const PizzaFields = () => {
  const [slices] = useField('no_of_slices')
  const [diameter] = useField('diameter')

  let slicesDisplay = ''

  if (!isNaN(+slices.value) && Number(slices.value) > 0) {
    const slicesToAdd = Number(slices.value)

    for (let i = 0; i < slicesToAdd; i++) {
      slicesDisplay += ' 🍕'
    }
  }

  return (
    <>
      <label>
        <span>Number of slices:</span>
        <input {...slices} type='number' />
      </label>
      {slicesDisplay && <p className='pizza-slices'>{slicesDisplay}</p>}
      <label>
        <span>Diameter:</span>
        <input {...diameter} type='number' />
      </label>
      <PizzaDiameterDisplay diameter={Number(diameter.value)} />
    </>
  )
}
