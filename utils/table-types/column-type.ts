
//common column interface for generic use
export interface Column<T> {
  id: keyof T;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: any) => string;
  sortable?: boolean;
  filterOptions?: string[];
}