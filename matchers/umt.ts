import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  nameCompany: string;
  nameParams: string;
  queryString: string;
}

const loader = (props: Props, { request }: MatchContext) => {
  const url = new URL(request.url);

  const matcher = url.searchParams.get(props.nameParams) === props.queryString;

  console.log("url", matcher);

  return matcher;
};

export default loader;
