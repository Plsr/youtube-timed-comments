type ProgressBarElement = HTMLDivElement & {
  "aria-valuenow": string
  "aria-valuemax": string
}

export const getProgressBar = (): ProgressBarElement | undefined => {
  const progressBars = document.querySelectorAll(".ytp-progress-bar")

  if (!progressBars.length) {
    // TODO: No video playing? Do something reasonable here
    return undefined
  }

  const progressBar = progressBars[0] as HTMLDivElement
  const valueNow = !!progressBar.getAttribute("aria-valuenow")
  const valueMax = !!progressBar.getAttribute("aria-valuemax")

  if (!valueNow || !valueMax) {
    // TODO: Sometehing does not seem to work with the progerss bar here
    // do somethign reasonable
    return undefined
  }

  return progressBar as ProgressBarElement
}
