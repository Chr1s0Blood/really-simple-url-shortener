import { appEnv } from "@/config/env.js";
import type { FastifyReply, FastifyRequest } from "fastify";

export default class UrlHelper {
  static isValidUrlFromRequest(
    req: FastifyRequest,
    reply: FastifyReply,
    done: () => void
  ) {
    const { url } = req.body as { url: string };

    if (!UrlHelper.isValidUrl(url)) {
      return reply.status(400).send({ error: "Invalid URL" });
    }

    done();
  }

  static isValidUrl(url: string): boolean {
    // ok, isso vai dar match nas url... provavelmente
    const urlPattern =
      /^(https?:\/\/)?(([a-zA-Z0-9]([a-zA-Z0-9_-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,})(:\d+)?(\/[^\s]*)?$/i;

    try {
      new URL(url.startsWith("http") ? url : `http://${url}`);
      return urlPattern.test(url);
    } catch (e) {
      return false;
    }
  }

  static generateUrl(pathname: string) {
    const baseUrl = appEnv.BASE_URL;
    const url = new URL(pathname, baseUrl);
    return url.toString();
  }
}
