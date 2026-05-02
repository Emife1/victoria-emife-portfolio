export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  impact?: string;
  mediaUrl?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  tags?: string[];
};