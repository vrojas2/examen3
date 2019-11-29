class PriorityQueue {
    constructor() {
    }

    extract() {
        if (this._start.priority === 1) {
            let t = this._start;
            this._start = this._start.next;
            return t;
        } else if (this._start.priority != 1) {
            let aux = this._start;
            let tag = false;
            while (!aux.next === null) {
                if (aux.priority === 1) {
                    tag = true;
                    let t = aux;
                    aux.prev.next = aux.next;
                    aux.next.prev = aux.prev;
                    return t;
                }
                aux = aux.next;
            }
            if (tag === false) {
                let t = this._start;
                this._start = this._start.next;
                return t;
            }
        }
    }
}

