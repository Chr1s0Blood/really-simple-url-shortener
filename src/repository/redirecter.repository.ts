import RedirecterModel from "@/models/redirecter.model.js";

export default class RedirecterRepository {

    static create (url: string, shortId: string, expiresAt: Date) {
        return RedirecterModel.create({ url, shortId, expiresAt });
    }

    static findByShortId (shortId: string) {
        return RedirecterModel.findOne({ shortId });
    }

}