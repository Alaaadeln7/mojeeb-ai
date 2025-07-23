"use client";

import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { Loader2, Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const t = useTranslations("Login");
  const { login, loading } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("validation.emailInvalid"))
      .required(t("validation.required")),
    password: Yup.string()
      .min(6, t("validation.passwordMin"))
      .required(t("validation.required")),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setErrors }): Promise<void> => {
      try {
        await login(values);
        resetForm();
        router.push("/");
      } catch (error) {
        setErrors({
          email: "Invalid credentials",
          password: "Invalid credentials",
        });
        console.log("Login error:", error);
      }
    },
  });

  return (
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {t("title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t("email")}</Label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 px-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={t("emailPlaceholder")}
                  className={`px-10 ${
                    formik.touched.email && formik.errors.email
                      ? "border-destructive"
                      : ""
                  }`}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-sm font-medium text-destructive">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t("password")}</Label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 px-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={t("passwordPlaceholder")}
                  className={`px-10 ${
                    formik.touched.password && formik.errors.password
                      ? "border-destructive"
                      : ""
                  }`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute inset-y-0 left-0 px-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-sm font-medium text-destructive">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>
            <Button
              type="submit"
              disabled={formik.isSubmitting || loading}
              className="w-full btn-primary"
            >
              {loading ? (
                <>
                  {t("loading")}
                  <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                </>
              ) : (
                t("submit")
              )}
            </Button>
            <div className="flex justify-between items-center pt-2">
              <Link
                href="/auth/forget-password"
                className="text-sm text-primary hover:underline"
              >
                {t("forgetPassword")}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
