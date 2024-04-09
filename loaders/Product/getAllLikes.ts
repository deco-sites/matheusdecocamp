interface Result {
  total: number;
}

const loader = async (): Promise<Result> => {
  const response = await fetch("https://camp-api.deco.cx/events", {
    method: "GET",
    headers: {
      "x-api-key": "matheusdecocamp",
    },
  }).then((r) => r.json());

  return response;
};

export default loader;
