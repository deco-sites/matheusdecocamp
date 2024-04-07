import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import type { Temperature } from "apps/weather/loaders/temperature.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title: string;
  content: HTMLWidget;
  weather?: Temperature | null;
  imageHeat: ImageWidget;
  altHeat: string;
  imageCold: ImageWidget;
  altCold: string;
  preloadimgs: boolean;
}

const WIDTH = 80;
const HEIGHT = 80;

export default function Temp(
  {
    title,
    content,
    weather,
    imageCold,
    imageHeat,
    altCold,
    altHeat,
    preloadimgs,
  }: Props,
) {
  return (
    <div class="w-full h-auto bg-accent">
      <div class="flex flex-col gap-4 justify-center items-center py-7 container text-center">
        <h2 class=" font-semibold text-2xl">{title}</h2>
        <span class=" text-base" dangerouslySetInnerHTML={{ __html: content }}>
        </span>
        <div class="flex flex-row gap-4 items-center">
          <p class=" text-5xl font-bold">{weather?.celsius + "ºC"}</p>
          {weather?.celsius && weather?.celsius < 20
            ? (
              <Image
                src={imageCold}
                alt={altCold}
                width={WIDTH}
                height={HEIGHT}
                preload={preloadimgs}
                loading={preloadimgs ? "eager" : "lazy"}
                decoding="async"
              />
            )
            : (
              <Image
                src={imageHeat}
                alt={altHeat}
                width={WIDTH}
                height={HEIGHT}
                preload={preloadimgs}
                loading={preloadimgs ? "eager" : "lazy"}
                decoding="async"
              />
            )}
        </div>
      </div>
    </div>
  );
}
