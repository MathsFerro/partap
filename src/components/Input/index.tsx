import { ElementStyledType } from "../../interfaces/ElementStyledType";

export function Input({ children, icon, classNameElement, classNameChildren }: ElementStyledType) {
  return(
    <>
      <input className={classNameElement}>
        {icon ?? ''}
        <span className={classNameChildren}>{children}</span>
      </input>
    </>
  );
}