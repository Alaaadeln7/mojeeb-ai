import {
  useCreateEnrollmentFormMutation,
  useGetAllEnrollmentFormsQuery,
} from "@/store/api/enrollmentFormSlice";
import { EnrollmentFormData } from "@/types/EnrollmentForm";
import { toast } from "sonner";
export default function useEnrollmentForm() {
  const [createEnrollmentForm, { isLoading: createEnrollmentFormLoading }] =
    useCreateEnrollmentFormMutation();
  const { data: enrollmentForms, isLoading: enrollmentFormLoading } =
    useGetAllEnrollmentFormsQuery();
  async function handleCreateEnrollmentForm(formData: EnrollmentFormData) {
    try {
      const res = await createEnrollmentForm(formData).unwrap();
      if (res) {
        console.log(res);
        toast("Enrollment form created successfully");
      }
    } catch (error) {
      console.error("Error creating enrollment form:", error);
    }
  }
  return {
    handleCreateEnrollmentForm,
    createEnrollmentFormLoading,
    enrollmentForms: enrollmentForms?.data || [],
    enrollmentFormLoading,
  };
}
