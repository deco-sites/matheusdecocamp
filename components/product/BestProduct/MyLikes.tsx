import Icon from "../../ui/Icon.tsx";
import { numberMyLikes } from "../../../sdk/useLikes.ts";
import { useSignal, useSignalEffect } from "@preact/signals";
import { invoke } from "deco-sites/matheusdecocamp/runtime.ts";

export default function MyLikes() {
  const number = useSignal(0);

  useSignalEffect(() => {
    async function getLikes() {
      const response = await invoke["deco-sites/matheusdecocamp"].loaders
        .Product.getAllLikes({});
      number.value = response.total;
    }

    if (numberMyLikes.value) {
      getLikes();
    }

    setInterval(() => {
      getLikes();
    }, 30000);

    getLikes();
  });

  return (
    <div class="flex flex-row gap-2">
      <Icon id="friends" size={24} />
      <span>{number.value}</span>
    </div>
  );
}
