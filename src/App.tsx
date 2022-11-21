import { Field, Form, Formik, FormikProps } from 'formik'
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

        return (
          <div className='form-main'>
            <div className='form-container'>
              <h1>Dishes selector</h1>
              <Form className='form'>
                <label>
                  Dish name:
                  <Field name='name' />
                </label>
                <label>
                  Dish type:
                  <Field disabled={!nameIsSet} as='select' name='dishType'>
                    <option value='unset'>unset</option>
                    <option value='Pizza'>Pizza</option>
                    <option value='Soup'>Soup</option>
                    <option value='Sandwich'>Sandwich</option>
                  </Field>
                </label>
                {nameIsSet && (
                  <>
                    {dishType === 'Pizza' && (
                      <>
                        <label>
                          Number of slices:
                          <Field name='no_of_slices' />
                        </label>
                        <label>
                          Diameter:
                          <Field name='no_of_slices' />
                        </label>
                      </>
                    )}
                    {dishType === 'Soup' && (
                      <>
                        <label>
                          Spiciness scale:
                          <Field
                            min='1'
                            max='10'
                            type='range'
                            name='spiciness_scale'
                          />
                        </label>
                      </>
                    )}
                    {dishType === 'Sandwich' && (
                      <>
                        <label>
                          Slices of bread:
                          <Field type='number' name='slices_of_bread' />
                        </label>
                      </>
                    )}
                  </>
                )}
                <div className='actions'>
                  <button disabled={!nameIsSet} type='submit'>
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
