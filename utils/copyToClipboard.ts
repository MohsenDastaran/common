export const copyToClipboard = (text: string): Promise<void> => navigator.clipboard.writeText(text);
