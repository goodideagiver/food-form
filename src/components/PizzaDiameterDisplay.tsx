import classes from './PizzaDiameterDisplay.module.css'

type Props = {
  diameter: number
  unit?: string
}
export const PizzaDiameterDisplay = ({ diameter, unit = 'cm' }: Props) => {
  if (diameter <= 0 || !isFinite(diameter)) return null

  return (
    <div className={classes.root} aria-hidden='true'>
      <span className={classes.pizza}>
        <span className={classes.line}></span>
        <span className={classes.label}>
          {diameter}
          {unit}
        </span>
      </span>
    </div>
  )
}
