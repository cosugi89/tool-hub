import { TagId } from "@/data/tag";

export type Item = {
  id: string;
  label: string;
  tags: TagId[];
  summary: string;
  status?: string[];
};
