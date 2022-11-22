import { Field, Form, Formik, FormikProps } from 'formik'
import { FormChoices } from './components/FormChoices'
import { nameValidate, validatePreparationTime } from './fieldValidators'
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

  return (
    <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
      {(props: FormikProps<FormFields>) => {
        const { dishType, name } = props.values
        const errors = props.errors
        const touched = props.touched
        const nameIsSet = name && name.trim().length > 0
        const preparationTimeValid = !errors.preparationTime

        const submitDisabled =
          !nameIsSet || dishType === 'unset' || !preparationTimeValid

        return (
          <div className='form-main'>
            <div className='form-container'>
              <h1 className='form-title'>Dishes selector</h1>
              <Form className='form'>
                <label>
                  <span>Dish name:</span>
                  <Field validate={nameValidate} name='name' />
                </label>
                {errors.name && touched.name && (
                  <p className='error'>{errors.name}</p>
                )}
                <label>
                  <span>Preparation time:</span>
                  <Field
                    validate={validatePreparationTime}
                    name='preparationTime'
                  />
                </label>
                {errors.preparationTime && touched.preparationTime && (
                  <p className='error'>{errors.preparationTime}</p>
                )}
                <label>
                  <span>Dish type:</span>
                  <Field
                    disabled={!nameIsSet || !preparationTimeValid}
                    as='select'
                    name='dishType'
                  >
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
