import { Field, Form, Formik, FormikHelpers, FormikProps } from 'formik'
import { FormChoices } from './components/FormChoices'
import { PreparationTimeDisplay } from './components/PreparationTimeDisplay'
import { nameValidate, validatePreparationTime } from './fieldValidators'
import { formSubmitHandler } from './formHelpers'
import { FormFields } from './formTypes'

import pizzaGif from './../public/pizza-food.gif'

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
  const onFormSubmit = async (
    values: FormFields,
    actions: FormikHelpers<FormFields>
  ) => {
    actions.setStatus({ loading: true })
    try {
      await formSubmitHandler(values, values.dishType)
      actions.setStatus({ loading: false })
    } catch (error) {
      actions.setStatus({ error: true, loading: false })
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
      {(props: FormikProps<FormFields>) => {
        const { dishType, name } = props.values
        const isLoading = props.status?.loading
        const hasErrorWhenSendingData = props.status?.error
        const errors = props.errors
        const touched = props.touched
        const nameIsSet = name && name.trim().length > 0
        const preparationTimeValid = !errors.preparationTime

        const submitDisabled =
          !nameIsSet ||
          dishType === 'unset' ||
          !preparationTimeValid ||
          isLoading

        return (
          <div className='form-main'>
            <div className='form-container'>
              <h1 className='form-title'>Dishes selector</h1>
              {hasErrorWhenSendingData && (
                <p className='error'>There was an error when sending data</p>
              )}
              {isLoading && (
                <div className='loader-wrapper'>
                  <img className='loader' src={pizzaGif} />
                  <p>Sending your delicious dish</p>
                </div>
              )}
              {!isLoading && (
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
                  <PreparationTimeDisplay
                    preparationTime={props.values.preparationTime}
                  />
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
              )}
            </div>
          </div>
        )
      }}
    </Formik>
  )
}
