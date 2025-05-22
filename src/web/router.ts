import ShortUrlHelper from "@/helpers/short-url.helper.js";
import type { FastifyInstance } from "fastify";
import RedirecterController from "./controller.js";
import UrlHelper from "@/helpers/url.helper.js";

export default function appRouter(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    return { message: "Olá, mundo!" };
  });

  fastify.route({
    method: "GET",
    url: "/r/:shortId",
    preValidation: ShortUrlHelper.validateShortUrlFromRequest,
    handler: RedirecterController.redirect,
  });

  fastify.route({
    method: "POST",
    url: "/r",
    preValidation: UrlHelper.isValidUrlFromRequest,
    handler: RedirecterController.create,
  });
}
