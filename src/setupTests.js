import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// jsdom doesn't implement IntersectionObserver, which components like
// Stats use to trigger their counter animation once visible.
class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver;

// jsdom doesn't implement ResizeObserver either, used by BlogCarousel to
// recompute how many slides fit in the viewport.
class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}
window.ResizeObserver = MockResizeObserver;

// jsdom's test environment doesn't provide TextEncoder/TextDecoder, which
// react-router relies on internally.
if (typeof global.TextEncoder === "undefined") {
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
}
