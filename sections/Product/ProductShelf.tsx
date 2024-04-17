import ImageCulture from "../../components/fallback/ImageCulture.tsx";

export { default } from "../../components/product/ProductShelf.tsx";

export function LoadingFallback() {
  return (
    <div class="w-full h-auto flex justify-center items-center mt-20 mb-9">
      <div class="flex w-full flex-row py-2 px-1 sm:px-2 border rounded-xl container relative shadow-md max-w-80 sm:max-w-md lg:w-screen lg:max-w-3xl xl:max-w-4xl gap-2">
        <div class="skeleton bg-slate-300 w-32 h-32 lg:w-52 lg:h-52"></div>
        <div class="flex flex-col gap-2 w-3/5 lg:w-8/12 lg:flex-row justify-between lg:justify-start cursor-pointer">
          <div class="flex flex-col gap-1 lg:gap-3 lg:w-3/5">
            <div class="skeleton bg-slate-300 w-full h-2 lg:h-3"></div>
            <div class="skeleton bg-slate-300 w-full h-2"></div>
          </div>
          <div class="flex flex-col lg:w-2/5 lg:justify-end gap-2 lg:gap-3">
            <div class="skeleton bg-slate-300 w-full h-4 lg:h-5"></div>
            <div class="skeleton bg-slate-300 w-full h-12 lg:h-14 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorFallback() {
  return (
    <ImageCulture
      title="Novidades"
      content="Descubra nossa pagina de Culturas"
      alt="culturas"
      imgDesktop="/banner-desk.jpg"
      imgMobile="/banner-mobile.jpg"
      button={{ href: "/culturas", label: "para saber mais" }}
    />
  );
}
