/* should generate diagnostics */

// the comment that leads the removed return is kept
function a() {
    // best effort: nothing to do
    return;
}

// the comment that leads the removed return inside a block is kept
function b() {
    if (condition) {
        // nothing else to do here
        return;
    }
}

// the comment that trails the removed return is kept
function c() {
    return; // nothing else to do here
}

// the comment that leads the removed return at the end of a block is kept
function d() {
    doSomething();
    // nothing left to do
    return;
}
