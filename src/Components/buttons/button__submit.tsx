interface ButtonSubmitProps {
  large?: boolean;
  medium?: boolean;
  fill?: boolean;
  transparent?: boolean;
  placeholder?: string;
  onclick?: any;
}

export default function ButtonSubmit({
  large,
  medium,
  fill,
  transparent,
  placeholder,
  onclick,
}: ButtonSubmitProps) {
  const ClassSize = large ? "button--large" : medium ? "button--medium" : null;
  const ClassType = fill
    ? "button--fill"
    : transparent
    ? "button--transparent"
    : null;
  const OnClick = onclick ? onclick : null;

  return (
    <button
      type="button"
      onClick={OnClick ? OnClick : null}
      className={`button ${ClassSize} ${ClassType}`}>
      {placeholder}
    </button>
  );
}
