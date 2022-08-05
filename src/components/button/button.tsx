type Props = {
  class: string,
  label: string
}

const Button = (props:Props) => (
  <button
    className={'border border-black mt-5 rounded-full ' + (props.class)}
  >{props.label}
  </button>
)

export default Button;