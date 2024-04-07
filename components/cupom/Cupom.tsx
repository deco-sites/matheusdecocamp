import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  title?: string;
  content?: HTMLWidget;
  cupom: string;
}

export default function Cupom({ title, content, cupom }: Props) {
  return (
    <div class="w-full h-auto bg-primary border-b-2 border-secondary">
      <div class="container flex flex-col gap-3 justify-center items-center py-7">
        <h3 class="text-3xl text-center font-bold">{title}</h3>
        {content && (
          <span
            class="text-base text-center"
            dangerouslySetInnerHTML={{ __html: content }}
          >
          </span>
        )}
        <div class="flex flex-row gap-3">
          <div class="uppercase text-4xl border-2 border-black px-3 py-2 border-dashed font-semibold">
            {cupom}
          </div>
        </div>
      </div>
    </div>
  );
}
