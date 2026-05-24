export function formatSize(bytes: number): string {
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  if (bytes >= GB) {
    return `${(bytes / GB).toFixed(2)} GB`;
  }
  if (bytes >= MB) {
    return `${(bytes / MB).toFixed(2)} MB`;
  }
  return `${(bytes / KB).toFixed(2)} KB`;
}
