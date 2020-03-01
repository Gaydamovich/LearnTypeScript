"use strict";
class Singl {
    constructor(port) {
        this.port = port;
        if (Singl.inst) {
            return Singl.inst;
        }
        this.port = port;
        Singl.inst = this;
        return Singl.inst;
    }
}
//# sourceMappingURL=index.js.map