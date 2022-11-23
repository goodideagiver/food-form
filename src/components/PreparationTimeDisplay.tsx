import { validatePreparationTime } from '../fieldValidators'

type Props = {
  preparationTime: string
}
export const PreparationTimeDisplay = ({ preparationTime }: Props) => {
  if (validatePreparationTime(preparationTime)) return null

  const [hours, minutes, seconds] = preparationTime.split(':')
  const hoursInt = parseInt(hours, 10)
  const minutesInt = parseInt(minutes, 10)
  const secondsInt = parseInt(seconds, 10)

  return (
    <div className='preparation-time'>
      <span>🕑</span>
      {hoursInt > 0 && <span>{hoursInt}h</span>}
      {minutesInt > 0 && <span>{minutesInt}m</span>}
      {secondsInt > 0 && <span>{secondsInt}s</span>}
    </div>
  )
}
