import type { FastifyReply, FastifyRequest } from "fastify";

export default class AppController {
    static redirect (req: FastifyRequest, reply: FastifyReply) {
        const params = req.params as { shortUrl: string };

    }
}