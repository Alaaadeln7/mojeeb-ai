"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useFormik } from "formik";
import { ArrowLeft, Loader2, LockKeyhole, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import { resetPasswordValidation } from "../../../utils/validation/authValidation";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormValues {
  newPassword: string;
  confirmPassword: string;
}

export default function ResetPassword() {
  const t = useTranslations("ResetPassword");
  const { resetPassword, loading } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const placeholderColor =
    theme === "dark" ? "placeholder-gray-400" : "placeholder-gray-500";

  const formik = useFormik<FormValues>({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidation,
    onSubmit: async (values, { resetForm }): Promise<void> => {
      try {
        console.log(values);
        await resetPassword(values);
        resetForm();
        toast.success(t("successMessage"));
        router.push("/auth/login");
      } catch (error) {
        toast.error(t("errorMessage"));
      }
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <CardHeader>
          <CardTitle className={`text-2xl font-bold ${textColor}`}>
            {t("title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="newPassword"
                className={`font-medium ${textColor}`}
              >
                {t("newPassword")}
              </Label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  className={`pl-10 pr-10 ${placeholderColor}`}
                  placeholder={t("newPasswordPlaceholder")}
                  name="newPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {formik.errors.newPassword && formik.touched.newPassword && (
                <p className="text-destructive text-sm">
                  {formik.errors.newPassword}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className={`font-medium ${textColor}`}
              >
                {t("confirmPassword")}
              </Label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className={`pl-10 pr-10 ${placeholderColor}`}
                  placeholder={t("confirmPasswordPlaceholder")}
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className="text-destructive text-sm">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>

            <Button
              type="submit"
              className="w-full btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  {t("loading")}
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                t("submit")
              )}
            </Button>

            <div className="text-center text-sm">
              <Link href="/auth/login" className="text-primary hover:underline">
                {t("backToLogin")}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
