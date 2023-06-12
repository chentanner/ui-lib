

const aResponse = {
  message: {
    a: [],
    b: [],
    c: [],
    d: [],
  },
};

const bResponse = {
  message: [
    { object: "object1" },
    { object: "object2" },
  ],
};

const createResponse = (data: any): Response => {
  const response = {
    ...new Response(),
    ok: true,
    status: 200,
    json: async () => data,
  }
  return response;
}


export default async function setupFetchStub(input: URL | RequestInfo, init?: RequestInit | undefined): Promise<Response> {
  switch (input) {
    case "https://tanner.com/api/endpoint1": {
      return Promise.resolve(createResponse(aResponse));
    }
    case "https://tanner.com/api/endpoint2/0":
    case "https://tanner.com/api/endpoint2/1": {
      return Promise.resolve(createResponse(bResponse));
    }
    case "https://dummyjson.com/products/1": {
      return Promise.resolve(createResponse({ title: "pixel4" }))
    }
    default: {
      throw new Error(`Unhandled request: ${input}`);
    }
  }
}


