import clsx from "clsx";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  attribute?: string;
}

export function Input({ className: classProps, ...otherProps }: IInputProps) {
  return (
    <input
      className={clsx(
        "h-10 outline-none rounded-sm px-2 text-gray-600 focus:ring-2 focus:ring-gray-500",
        classProps
      )}
      {...otherProps}
    />
  );
}
