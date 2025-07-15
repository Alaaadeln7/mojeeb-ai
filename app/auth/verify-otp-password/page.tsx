"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useFormik } from "formik";
import { ArrowLeft, Loader2, LockKeyhole } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import { verifyOtpPasswordValidation } from "../../../utils/validation/authValidation";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormValues {
  otp: string;
}

export default function VerifyOtp() {
  const t = useTranslations("VerifyOtp");
  const { verifyOtpForgetPassword, loading } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();

  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const placeholderColor =
    theme === "dark" ? "placeholder-gray-400" : "placeholder-gray-500";

  const formik = useFormik<FormValues>({
    initialValues: {
      otp: "",
    },
    validationSchema: verifyOtpPasswordValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        await verifyOtpForgetPassword(values);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
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
              <Label htmlFor="otp" className={`font-medium ${textColor}`}>
                {t("otp")}
              </Label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  className={`pl-10 ${placeholderColor}`}
                  placeholder={t("otpPlaceholder")}
                  name="otp"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.otp}
                />
              </div>
              {formik.errors.otp && formik.touched.otp && (
                <p className="text-destructive text-sm">{formik.errors.otp}</p>
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
