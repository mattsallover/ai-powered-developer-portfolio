
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: [{ text: string }];
}
