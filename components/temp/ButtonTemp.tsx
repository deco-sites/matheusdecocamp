import type { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature: Temperature | null;
}

export default function ButttonTemperature({ temperature }: Props) {
  if (!temperature?.celsius) {
    return null;
  }

  return (
    <div class="fixed bottom-10 right-5 bg-blue-500 rounded-full p-4 w-fit h-14 font-bold text-white">
      {temperature?.celsius + "ºC"}
    </div>
  );
}
