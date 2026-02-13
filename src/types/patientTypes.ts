export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export type DataIndex = keyof DataType;
