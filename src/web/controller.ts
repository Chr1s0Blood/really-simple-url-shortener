import { logger } from "@/config/logger.js";
import NanoId from "@/lib/nanoid.js";
import RedirecterRepository from "@/repository/redirecter.repository.js";
import DateUtils from "@/utils/date.util.js";
import type { FastifyReply, FastifyRequest } from "fastify";

export default class RedirecterController {
  static async redirect(req: FastifyRequest, reply: FastifyReply) {
    const params = req.params as { shortId: string };
    const { shortId } = params;

    try {
      const redirecter = await RedirecterRepository.findByShortId(shortId);

      if (!redirecter) {
        return reply.status(404).send({ error: "Url not found! :(" });
      }

      const { url, expiresAt } = redirecter;

      if (DateUtils.isExpiredByNow(expiresAt)) {
        return reply.status(410).send({ error: "Url expired! :/" });
      }

      return reply.redirect(url);
    } catch (error) {
      logger.error(error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  }

  static async  create(req: FastifyRequest, reply: FastifyReply) {
    const { url } = req.body as { url: string };

    const shortId = NanoId.generateShortId();

    const expiresAt = DateUtils.addDays(new Date(), 1);

    try {
      const redirecter = await RedirecterRepository.create(
        url,
        shortId,
        expiresAt
      );

      return reply.status(201).send({
        shortId,
        url: redirecter.url,
        expiresAt: redirecter.expiresAt
      });
    } catch (error) {
      logger.error(error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  }
}
