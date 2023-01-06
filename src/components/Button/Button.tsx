type Props = {
  children: React.ReactNode;
}

export function Button({ children }: Props) {
  return(
    <button className="py-2 px-4 rounded-md">{children}</button>
  )
}