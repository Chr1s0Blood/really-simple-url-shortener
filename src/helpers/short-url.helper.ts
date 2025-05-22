import NanoId from "@/lib/nanoid.js";
import type { FastifyReply, FastifyRequest } from "fastify";

export default class ShortUrlHelper {
  static validateShortUrlFromRequest(
    req: FastifyRequest,
    reply: FastifyReply,
    done: () => void
  ) {
    const params = req.params as { shortId?: string };
    if (!params?.shortId) {
      return reply.status(400).send({ error: "shortId is required!" });
    }

    const shortPathname = params.shortId;

    if (!NanoId.isNanoid(shortPathname)) {
      return reply.status(400).send({ error: "shortId must be valid!" });
    }

    done();
  }
}
