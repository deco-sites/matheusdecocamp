export interface Props {
  text: string;
}

export default function Text({ text }: Props) {
  return (
    <div class="w-full h-full py-11">
      <span class="text-center text-3xl w-fulld">{text}</span>
    </div>
  );
}
