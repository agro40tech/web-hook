interface ButtonSubmitProps {
  large?: boolean;
  medium?: boolean;
  fill?: boolean;
  transparent?: boolean;
  placeholder?: string;
}

export default function ButtonSubmit({
  large,
  medium,
  fill,
  transparent,
  placeholder,
}: ButtonSubmitProps) {
  const ClassSize = large ? "button--large" : medium ? "button--medium" : null;
  const ClassType = fill
    ? "button--fill"
    : transparent
    ? "button--transparent"
    : null;

  return (
    <button type="submit" className={`button ${ClassSize} ${ClassType}`}>
      {placeholder}
    </button>
  );
}
