/**
 * Standalone Router Utility for Clean Path Routing
 */
export const navigate = (path) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new Event('pushstate-navigate'));
};
