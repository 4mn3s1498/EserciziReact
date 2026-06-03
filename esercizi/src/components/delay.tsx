export const delayMiddleware =
  (store: any) => (next: any) => (action: any) => {
    setTimeout(() => {
      next(action);
    }, 1000);
  };