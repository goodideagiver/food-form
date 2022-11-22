export const nameValidate = (value: string) => {
  if (!value || !value.trim().length) return 'Name is required'
  if (value.length < 3) return 'Name must be at least 3 characters'

  return ''
}

export const validatePreparationTime = (value: string) => {
  const [hours, minutes, seconds] = value.split(':')
  const hoursInt = parseInt(hours, 10)
  const minutesInt = parseInt(minutes, 10)
  const secondsInt = parseInt(seconds, 10)

  if (!value) return 'Preparation time is required'

  if (hoursInt < 0 || hoursInt > 23) {
    return 'Hours must be between 0 and 23'
  }

  if (minutesInt < 0 || minutesInt > 59) {
    return 'Minutes must be between 0 and 59'
  }

  if (secondsInt < 0 || secondsInt > 59) {
    return 'Seconds must be between 0 and 59'
  }

  if (!value.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/))
    return 'Please use HH:MM:SS time format'

  return undefined
}
