export interface GridListProps {
  data: Array<{
    name: string,
    mailReceivedDate: string,
    solutionSentDate?: string,
    isBackgroundColorRed?: boolean
  }>;
}
