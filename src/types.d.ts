export interface ItemDisplayItem {
  id: string;
  title: string;
  description: string;
  link: string?;
}

export interface ItemStackGroup {
  id: string;
  title: string;
  items: ItemDisplayItem[];
}

export interface Quote {
  quote: string;
  author: string;
}
