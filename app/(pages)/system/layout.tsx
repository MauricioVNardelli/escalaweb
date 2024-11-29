interface IProps {
  children: React.ReactNode;
}

export default function LayoutSystem({ children }: IProps) {
  return <div id="layout-app">{children}</div>;
}
