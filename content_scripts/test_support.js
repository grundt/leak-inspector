browser.runtime.onMessage.addListener(request => {

  // solely to help facilitate automated tests
  if (request.message === "LeakInspectorBadge") {
    window.postMessage(request, "http://example.com/");
  }

});