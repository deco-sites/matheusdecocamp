export { default } from "../../components/temp/Temp.tsx";

export function LoadingFallback() {
  return (
    <div style={{ height: "230px" }} class="flex justify-center items-center">
      <span class="loading loading-spinner" />
    </div>
  );
}
