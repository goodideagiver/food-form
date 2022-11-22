import { Field, Form, Formik, FormikProps } from 'formik'
import { FormChoices } from './components/FormChoices'
import { formSubmitHandler } from './formHelpers'
import { FormFields } from './formTypes'

const initialValues: FormFields = {
  name: '',
  dishType: 'unset',
  preparationTime: '00:00:00',
  diameter: 0,
  slices_of_bread: 0,
  spiciness_scale: 1,
  no_of_slices: 0,
}

export const App = () => {
  const onFormSubmit = (values: FormFields) => {
    formSubmitHandler(values, values.dishType)
  }

  const validatePreparationTime = (value: string) => {
    const [hours, minutes, seconds] = value.split(':')
    const hoursInt = parseInt(hours, 10)
    const minutesInt = parseInt(minutes, 10)
    const secondsInt = parseInt(seconds, 10)

    if (!value) return 'Required'

    if (!value.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/))
      return 'Please use HH:MM:SS time format'

    if (hoursInt < 0 || hoursInt > 23) {
      return 'Hours must be between 0 and 23'
    }

    if (minutesInt < 0 || minutesInt > 59) {
      return 'Minutes must be between 0 and 59'
    }

    if (secondsInt < 0 || secondsInt > 59) {
      return 'Seconds must be between 0 and 59'
    }

    return undefined
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
      {(props: FormikProps<FormFields>) => {
        const { dishType, name } = props.values
        const errors = props.errors
        const nameIsSet = name && name.trim().length > 0

        const submitDisabled = !nameIsSet || dishType === 'unset'

        return (
          <div className='form-main'>
            <div className='form-container'>
              <h1 className='form-title'>Dishes selector</h1>
              <Form className='form'>
                <label>
                  <span>Dish name:</span>
                  <Field name='name' />
                </label>
                <label>
                  <span>Preparation time:</span>
                  <Field
                    validate={validatePreparationTime}
                    name='preparationTime'
                  />
                  {errors.preparationTime && <p>{errors.preparationTime}</p>}
                </label>
                <label>
                  <span>Dish type:</span>
                  <Field disabled={!nameIsSet} as='select' name='dishType'>
                    <option value='unset'>unset</option>
                    <option value='Pizza'>Pizza</option>
                    <option value='Soup'>Soup</option>
                    <option value='Sandwich'>Sandwich</option>
                  </Field>
                </label>
                <FormChoices dishType={dishType} />
                <div className='actions'>
                  <button disabled={submitDisabled} type='submit'>
                    Submit
                  </button>
                  <button type='reset'>Reset</button>
                </div>
              </Form>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}
