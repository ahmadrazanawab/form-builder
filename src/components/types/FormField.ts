export interface FormField {
    id: string;
    label: string;
    type: string;
    name: string;
    formName?: string;
    fields?: [];
    placeholder?: string;
    options?: string[]; // For 'select' type
    value?: string | number | boolean;
  }
  