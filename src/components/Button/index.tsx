import { ElementStyledType } from "../../interfaces/ElementStyledType";

export function Button({ children, icon, classNameElement, classNameChildren }: ElementStyledType) {
  return (
    <>
      <button className={classNameElement}>
        {icon ?? ''}
        <span className={classNameChildren}>{children}</span>
      </button>
    </>
  );

}