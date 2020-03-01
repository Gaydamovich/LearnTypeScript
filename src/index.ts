interface Iport {
    port: string
    a?: number
}

class Singl {
    private static inst: Iport;

    constructor(public port: string) {
        if (Singl.inst) {
            return Singl.inst
        }
        this.port = port;

        Singl.inst = this;
        return Singl.inst;
    }
}