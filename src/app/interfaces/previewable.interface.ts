export interface Previewable {
  name: string;
  getPreviewData(): {
    title: string,
    subtitle: string,
    mainImg: string,
  };
}
