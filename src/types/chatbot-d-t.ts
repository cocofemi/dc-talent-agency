export interface  IChatMessageType  {
    role: string;
    text: string;
    fileUrl?: boolean | string;
    isError?: boolean;
  };