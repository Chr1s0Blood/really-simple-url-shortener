import { isNanoid } from "@/lib/nanoid.js";
import type { FastifyReply, FastifyRequest } from "fastify";

export function validateShortUrlFromRequest (req: FastifyRequest, reply: FastifyReply, done: () => void) {
    const params = req.params as { shortUrl?: string };
    if (!params?.shortUrl) {
        return reply.status(400).send({ error: "shortUrl is required!" });
    }

    const shortUrl = params.shortUrl

    if (shortUrl.length !== 10) {
        return reply.status(400).send({ error: "shortUrl must be 10 characters long!" });
    }

    if (!isNanoid(shortUrl)) {
        return reply.status(400).send({ error: "shortUrl must be valid!" });
    }

    done();
}