import { Link } from "react-router-dom";

import "./button__link.css";

interface ButtonLinkProps {
  large?: boolean;
  medium?: boolean;
  fill?: boolean;
  transparent?: boolean;
  path?: string;
  placeholder?: string;
}

export default function ButtonLink({
  large,
  medium,
  fill,
  transparent,
  path,
  placeholder,
}: ButtonLinkProps) {
  const ClassSize = large ? "button--large" : medium ? "button--medium" : null;
  const ClassType = fill
    ? "button--fill"
    : transparent
    ? "button--transparent"
    : null;

  return (
    <Link to={`${path}`} className={`button ${ClassSize} ${ClassType}`}>
      {placeholder}
    </Link>
  );
}
