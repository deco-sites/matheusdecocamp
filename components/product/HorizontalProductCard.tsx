import type { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import WishlistButtonVtex from "../../islands/WishlistButton/vtex.tsx";
import { ProductDetailsPage } from "apps/commerce/types.ts";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import ImageCulture from "../fallback/ImageCulture.tsx";
import BestProductCard from "../../islands/BestProduct/BestProductCard.tsx";

export interface Props {
  product?: Product;
  preload?: boolean;
  index?: number;
}

const WIDTH = 300;
const HEIGHT = 300;

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <ImageCulture
      title="Novidades"
      content="Descubra nossa pagina de Culturas"
      alt="culturas"
      imgDesktop="../banner-desk.jpg"
      imgMobile="../banner-mobile.jpg"
      button={{ href: "/culturas", label: "para saber mais" }}
    />
  );
}
export function LoadingFallback() {
  return <div class="skeleton w-full h-[300px]"></div>;
}

export default function HorizontalProductCard(
  { product, preload, index }: Props,
) {
  if (!product) {
    return null;
  }

  const { url, productID, name, image: images, offers, isVariantOf } = product;
  const description = product.description || isVariantOf?.description;
  const productGroupID = isVariantOf?.productGroupID;
  const [front, back] = images ?? [];
  const { listPrice, price, installments } = useOffer(offers);

  return (
    <div class="w-full h-auto py-2 px-1">
      <div class="flex w-full flex-row max-w-[900px] py-2 px-1 border rounded-xl container relative shadow-md">
        <Image
          src={front.url!}
          alt={front.alternateName}
          width={WIDTH}
          height={HEIGHT}
          class={`bg-base-100 col-span-full row-span-full rounded duration-100 transition-scale scale-100 lg:group-hover:scale-125 max-w-[250px] m-auto w-2/5 lg:w-5/12`}
          sizes="(max-width: 640px) 50vw, 20vw"
          preload={preload}
          loading={preload ? "eager" : "lazy"}
          decoding="async"
        />
        <BestProductCard productId={productID} />
        <div class="flex flex-col gap-2 w-3/5 lg:w-3/5 lg:flex-row">
          <div class="flex flex-col lg:gap-3 lg:w-3/5">
            <h2
              class=" text-lg lg:text-2xl font-semibold"
              dangerouslySetInnerHTML={{ __html: name ?? "" }}
            >
            </h2>
            <span
              class="truncate text-sm"
              dangerouslySetInnerHTML={{ __html: description ?? "" }}
            >
            </span>
          </div>
          <div class="flex flex-col lg:w-2/5 lg:justify-end lg:gap-3">
            <span class="font-bold lg:text-3xl">
              {formatPrice(price, offers?.priceCurrency)}
            </span>
            <button class=" btn bg-success">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
