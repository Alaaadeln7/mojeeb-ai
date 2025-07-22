"use client";
import { Card } from "@/components/ui/card";

import MobileCardView from "@/components/pages/MobileCardView";
import DesktopTableView from "@/components/pages/DesktopTableView";
import useEnrollmentForm from "@/hooks/useEnrollmentForm";
import { useTranslations } from "next-intl";
import SingleEnrollmentFormDialog from "@/components/organisms/SingleEnrollmentFormDialog";
import { useState } from "react";
import AcceptedEnrollmentFormDialog from "@/components/organisms/AcceptedEnrollmentFormDialog";
import RejectedEnrollmentFormDialog from "@/components/organisms/RejectedEnrollmentFormDialog";
import DeleteEnrollmentFormDialog from "@/components/organisms/DeleteEnrollmentFormDialog";
import SearchAndFilterEnrollmentForm from "@/components/organisms/SearchAndFilterEnrollmentForm";
import { Eye, Trash2, UserRoundCheck, X } from "lucide-react";

const columns = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Company",
    accessor: "company",
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Phone",
    accessor: "phone",
  },
  {
    header: "Industry",
    accessor: "industry",
  },
  {
    header: "Status",
    accessor: "status",
    badge: true,
  },
  {
    header: "Submitted On",
    accessor: "createdAt",
    customRender: (value) => new Date(value).toLocaleDateString(),
  },
];

const actions = [
  {
    label: "View Details",
    icon: Eye,
    style: "primary",
  },
  {
    label: "Approve",
    icon: UserRoundCheck,
    style: "success",
  },
  {
    label: "Reject",
    icon: X,
    destructive: true,
    style: "destructive",
  },
  {
    label: "Delete",
    icon: Trash2,
    destructive: true,
    style: "destructive",
  },
];

export default function EnrollmentFormsTable({ isRTL }) {
  const {
    enrollmentForms,
    enrollmentFormLoading,
    acceptedEnrollmentFormLoading,
    rejectedEnrollmentFormLoading,
    deleteEnrollmentFormLoading,
    handleAcceptEnrollmentForm,
    handleRejectEnrollmentForm,
    handleDeleteEnrollmentForm,
    searchQuery,
    setSearchQuery,
    searchLoading,
  } = useEnrollmentForm();
  const t = useTranslations("DesktopTableViewEnrollmentForm");
  const [openDialog, setOpenDialog] = useState(false);
  const [openAcceptedDialog, setOpenAcceptedDialog] = useState(false);
  const [openRejectedDialog, setOpenRejectedDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectItem, setSelectItem] = useState(null);
  return (
    <>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h2 className="sm:text-3xl text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-[#10a5b1] bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="text-muted-foreground sm:text-lg text-sm mt-2">
            {t("desc")}
          </p>
        </div>

        {/* Search and Filter */}
        <SearchAndFilterEnrollmentForm
          t={t}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchLoading={searchLoading}
        />
        {/* Data Display - Mobile */}
        <div className="block md:hidden">
          <div className="space-y-4">
            <MobileCardView
              forms={enrollmentForms}
              loading={enrollmentFormLoading}
              actions={actions}
              columns={columns}
              isRTL={isRTL}
              setOpenDialog={setOpenDialog}
              setSelectItem={setSelectItem}
              setOpenAcceptedDialog={setOpenAcceptedDialog}
              setOpenRejectedDialog={setOpenRejectedDialog}
              setOpenDeleteDialog={setOpenDeleteDialog}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <Card className="border-0 shadow-lg">
            <DesktopTableView
              columns={columns}
              actions={actions}
              data={enrollmentForms}
              loading={enrollmentFormLoading}
              isRTL={isRTL}
              setOpenDialog={setOpenDialog}
              setSelectItem={setSelectItem}
              setOpenAcceptedDialog={setOpenAcceptedDialog}
              setOpenRejectedDialog={setOpenRejectedDialog}
              setOpenDeleteDialog={setOpenDeleteDialog}
            />
          </Card>
        </div>
      </div>
      {openDialog && (
        <SingleEnrollmentFormDialog
          isOpen={openDialog}
          onClose={() => setOpenDialog(false)}
          item={selectItem}
        />
      )}
      {openRejectedDialog && (
        <RejectedEnrollmentFormDialog
          isOpen={openRejectedDialog}
          onClose={() => setOpenRejectedDialog(false)}
          item={selectItem}
          loading={rejectedEnrollmentFormLoading}
          onConfirm={handleRejectEnrollmentForm}
        />
      )}
      {openAcceptedDialog && (
        <AcceptedEnrollmentFormDialog
          isOpen={openAcceptedDialog}
          onClose={() => setOpenAcceptedDialog(false)}
          item={selectItem}
          loading={acceptedEnrollmentFormLoading}
          onConfirm={handleAcceptEnrollmentForm}
        />
      )}
      {openDeleteDialog && (
        <DeleteEnrollmentFormDialog
          isOpen={openDeleteDialog}
          onClose={() => setOpenDeleteDialog(false)}
          item={selectItem}
          onConfirm={handleDeleteEnrollmentForm}
          loading={deleteEnrollmentFormLoading}
        />
      )}
    </>
  );
}
