
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  image?: string; // base64 data URL for displaying images
  isLoading?: boolean;
}
