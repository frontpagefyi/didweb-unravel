import didwebtest from "../didwebtest.did.unravel.fyi.json";

export default {
  async fetch(request: Request): Promise<Response> {
    const host = new URL(request.url).host;
    if (host === "didwebtest.did.unravel.fyi") {
      return new Response(JSON.stringify(didwebtest), {
        headers: {
          "Content-Type": "application/json",
          // allow CORS for all origins
          "Access-Control-Allow-Origin": "*",
        },
      });
    } else {
      return new Response("Not Found", { status: 404 });
    }
  },
};
