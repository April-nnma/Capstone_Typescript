export const sleep = (time = 2500) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}
