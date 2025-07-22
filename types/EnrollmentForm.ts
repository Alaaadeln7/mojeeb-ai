export interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  address: string;
  industry: string;
  commercialRegister: string;
  taxId: string;
  message: string;
}
export interface EnrollmentFormItemData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  address: string;
  industry: string;
  commercialRegister: string;
  taxId: string;
  message: string;
  status: string;
  createdAt: string;
  _id: string;
  updatedAt: string;
}
export interface DialogProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  item: EnrollmentFormItemData;
  loading: boolean;
  onConfirm: (_id: string) => void;
}
