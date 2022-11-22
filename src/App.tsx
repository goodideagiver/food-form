import { Field, Form, Formik, FormikProps } from 'formik'
import { FormChoices } from './components/FormChoices'
import { FormFields } from './formTypes'

const initialValues: FormFields = {
  name: '',
  dishType: 'unset',
  preparationTime: '',
  diameter: 0,
  slices_of_bread: 0,
  spiciness_scale: 1,
  no_of_slices: 0,
}

export const App = () => {
  const formSubmitHandler = (values: FormFields) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Formik initialValues={initialValues} onSubmit={formSubmitHandler}>
      {(props: FormikProps<FormFields>) => {
        const { dishType, name } = props.values
        const nameIsSet = name && name.trim().length > 0

        const submitDisabled = !nameIsSet || dishType === 'unset'

        return (
          <div className='form-main'>
            <div className='form-container'>
              <h1>Dishes selector</h1>
              <Form className='form'>
                <label>
                  <span>Dish name:</span>
                  <Field name='name' />
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
