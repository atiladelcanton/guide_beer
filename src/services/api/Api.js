import Http from "./Http";

export default class Api extends Http{
    static base = "/v2";

    static build (path = "",    options = {},   http    =   null)   {
        return new this(Api.normalize(Api.base,path),options,http);
    }
}