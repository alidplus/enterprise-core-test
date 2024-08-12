
export async function delayForDemo<T>(promise: Promise<T>): Promise<T> {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}