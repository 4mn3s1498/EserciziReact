export const loggingMiddleware =
  (store: any) => (next: any) => (action: any) => {
    console.log("ACTION:", action);
    return next(action);
  };