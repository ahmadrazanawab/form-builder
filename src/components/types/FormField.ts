export interface FormField {
    id: string;
    label: string;
    type: string,
    name:string,
    placeholder?: string;
    options?: string[]; // For 'select' type
    value?: string | number | boolean;
  }
  