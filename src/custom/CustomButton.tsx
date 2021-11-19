import {
  FC, ReactNode,
} from 'react';

interface Props {
  label?: ReactNode;
  handleClick: () => void;
  kill?: boolean;
}

export const CustomButton: FC<Props> = ({ label, handleClick, kill }) => (
  <button
    type="button"
    onClick={handleClick}
    className="mainbutton"
    disabled={kill}>
    {label}
  </button>
);

export default CustomButton;
