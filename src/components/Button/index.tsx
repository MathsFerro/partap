import { ElementStyledType } from "../../interfaces/ElementStyledType";

export function Button({ children, icon, classNameChildren, ...rest }: ElementStyledType) {
  return (
    <>
      <button {...rest}>
        {icon ?? ''}
        <span className={classNameChildren}>{children}</span>
      </button>
    </>
  );

}