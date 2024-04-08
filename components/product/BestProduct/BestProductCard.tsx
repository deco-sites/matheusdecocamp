import { useSignal } from "@preact/signals";
import Icon from "../../ui/Icon.tsx";
import { numberMyLikes } from "../../../sdk/useLikes.ts";

export default function BestProductCard() {
  const likes = useSignal(0);

  const addLike = () => {
    likes.value = 1;
    numberMyLikes.value = numberMyLikes.value + 1;
  };

  const removeLike = () => {
    likes.value = 0;
    numberMyLikes.value = numberMyLikes.value - 1;
  };

  return (
    <div class="cursor-pointer flex flex-row gap-2 items-center">
      {(likes.value === 0)
        ? <Icon id="moodSmile" size={24} onClick={addLike} />
        : <Icon id="moodCheck" size={24} onClick={removeLike} />}
      <span class="font-bold text-sm">{likes.value} Likes</span>
    </div>
  );
}
