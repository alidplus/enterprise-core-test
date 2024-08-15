export async function delayForDemo<T>(promise: Promise<T>): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(resolve, 1)
  }).then(() => promise)
}
