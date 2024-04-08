import Icon from "../../ui/Icon.tsx";
import { numberMyLikes } from "../../../sdk/useLikes.ts";
import { useSignal, useSignalEffect } from "@preact/signals";

export default function MyLikes() {
  const number = useSignal(0);

  useSignalEffect(() => {
    number.value = numberMyLikes.value;
    setInterval(() => {
      number.value = number.value + 1;
      console.log("teste");
    }, 30000);
  });

  return (
    <div class="flex flex-row gap-2">
      <Icon id="friends" size={24} />
      <span>{number.value}</span>
    </div>
  );
}
