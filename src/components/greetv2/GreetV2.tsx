type GreetProps = {
  name?: string
}

export default function GreetV2({ name }: GreetProps) {
  return <div>Hello {name}</div>
}
