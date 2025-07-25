import { showToast } from "@/components/ui/sonner";
import {
  useAcceptedEnrollmentFormMutation,
  useCreateEnrollmentFormMutation,
  useDeleteEnrollmentFormMutation,
  useGetAllEnrollmentFormsQuery,
  useRejectedEnrollmentFormMutation,
  useSearchEnrollmentFormsQuery,
} from "@/store/api/enrollmentFormSlice";
import { EnrollmentFormData } from "@/types/EnrollmentForm";
import { useState } from "react";
import { toast } from "sonner";
export default function useEnrollmentForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [createEnrollmentForm, { isLoading: createEnrollmentFormLoading }] =
    useCreateEnrollmentFormMutation();
  const { data: enrollmentForms, isLoading: enrollmentFormLoading } =
    useGetAllEnrollmentFormsQuery(undefined);
  const [acceptedEnrollmentForm, { isLoading: acceptedEnrollmentFormLoading }] =
    useAcceptedEnrollmentFormMutation();
  const [rejectedEnrollmentForm, { isLoading: rejectedEnrollmentFormLoading }] =
    useRejectedEnrollmentFormMutation();
  const [deleteEnrollmentForm, { isLoading: deleteEnrollmentFormLoading }] =
    useDeleteEnrollmentFormMutation();
  const {
    data: searchEnrollmentForms,
    isLoading: searchEnrollmentFormLoading,
  } = useSearchEnrollmentFormsQuery(searchQuery, {
    skip: !searchQuery,
  });
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
  async function handleAcceptEnrollmentForm(id: string) {
    try {
      const res = await acceptedEnrollmentForm({ id }).unwrap();
      if (res) {
        console.log(res);
        showToast("Enrollment form accepted successfully", "success");
      }
    } catch (error) {
      console.error("Error accepting enrollment form:", error);
    }
  }
  async function handleRejectEnrollmentForm(id: string) {
    try {
      const res = await rejectedEnrollmentForm({ id }).unwrap();
      if (res) {
        console.log(res);
        showToast("Enrollment form rejected successfully", "success");
      }
    } catch (error) {
      console.error("Error rejecting enrollment form:", error);
    }
  }
  async function handleDeleteEnrollmentForm(id: string) {
    try {
      const res = await deleteEnrollmentForm({ id }).unwrap();
      if (res) {
        console.log(res);
        showToast("Enrollment form deleted successfully", "success");
      }
    } catch (error) {
      console.error("Error deleting enrollment form:", error);
    }
  }
  console.log(searchEnrollmentForms?.data);
  return {
    handleCreateEnrollmentForm,
    createEnrollmentFormLoading,
    enrollmentForms:
      searchQuery.length > 0
        ? searchEnrollmentForms?.data
        : enrollmentForms?.data || [],
    enrollmentFormLoading,
    acceptedEnrollmentFormLoading,
    rejectedEnrollmentFormLoading,
    deleteEnrollmentFormLoading,
    handleAcceptEnrollmentForm,
    handleRejectEnrollmentForm,
    handleDeleteEnrollmentForm,
    searchLoading: searchEnrollmentFormLoading,
    setSearchQuery,
    searchQuery,
  };
}
