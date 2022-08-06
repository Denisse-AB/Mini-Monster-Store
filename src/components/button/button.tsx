import { FC, ButtonHTMLAttributes} from 'react';

type Props = {
  children?: string,
  buttonType: string
}& ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({children, buttonType, ...otherProps}) => {
  return (
    <button
      className={'border border-black mt-5 rounded-full ' + (buttonType)}
      {...otherProps}
    >{children}
    </button>
  )
}

export default Button;