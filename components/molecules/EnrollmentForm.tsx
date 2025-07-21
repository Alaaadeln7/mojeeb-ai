"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  Building,
  Globe,
  MapPin,
  Briefcase,
  FileText,
  Hash,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  Loader,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import useEnrollmentForm from "@/hooks/useEnrollmentForm";
export default function EnrollmentForm() {
  const t = useTranslations("EnrollmentForm");
  const { handleCreateEnrollmentForm, createEnrollmentFormLoading } =
    useEnrollmentForm();
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("validation.required")),
    email: Yup.string()
      .email(t("validation.invalidEmail"))
      .required(t("validation.required")),
    phone: Yup.string().required(t("validation.required")),
    company: Yup.string().required(t("validation.required")),
    website: Yup.string()
      .url(t("validation.invalidUrl"))
      .required(t("validation.required")),
    address: Yup.string().required(t("validation.required")),
    industry: Yup.string().required(t("validation.required")),
    commercialRegister: Yup.string().required(t("validation.required")),
    taxId: Yup.string().required(t("validation.required")),
    message: Yup.string().required(t("validation.required")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      address: "",
      industry: "",
      commercialRegister: "",
      taxId: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await handleCreateEnrollmentForm(values);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
      className="flex justify-center"
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold my-3">
            <Button
              variant="outline"
              className="text-primary mx-2"
              onClick={() => {
                router.back();
              }}
            >
              {document.querySelector("html").dir === "ltr" ? (
                <ArrowLeft className="size-5" />
              ) : (
                <ArrowRight className="size-5" />
              )}
            </Button>
            {t("title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.form
            onSubmit={formik.handleSubmit}
            className="space-y-4"
            dir={t("dir")}
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="name">{t("fields.name")}*</Label>
              <div className="relative my-2">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="pl-10"
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.name}
                </p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="email">{t("fields.email")}*</Label>
              <div className="relative my-2">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="pl-10"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.email}
                </p>
              )}
            </motion.div>

            {/* Phone Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="phone">{t("fields.phone")}*</Label>
              <div className="relative my-2">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="pl-10"
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.phone}
                </p>
              )}
            </motion.div>

            {/* Company Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="company">{t("fields.company")}*</Label>
              <div className="relative my-2">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="company"
                  type="text"
                  name="company"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.company}
                  className="pl-10"
                />
              </div>
              {formik.touched.company && formik.errors.company && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.company}
                </p>
              )}
            </motion.div>

            {/* Website Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="website">{t("fields.website")}*</Label>
              <div className="relative my-2">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="website"
                  type="url"
                  name="website"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.website}
                  className="pl-10"
                />
              </div>
              {formik.touched.website && formik.errors.website && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.website}
                </p>
              )}
            </motion.div>

            {/* Address Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="address">{t("fields.address")}*</Label>
              <div className="relative my-2">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="address"
                  type="text"
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  className="pl-10"
                />
              </div>
              {formik.touched.address && formik.errors.address && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.address}
                </p>
              )}
            </motion.div>

            {/* Industry Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="industry">{t("fields.industry")}*</Label>
              <div className="relative my-2">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="industry"
                  type="text"
                  name="industry"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.industry}
                  className="pl-10"
                />
              </div>
              {formik.touched.industry && formik.errors.industry && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.industry}
                </p>
              )}
            </motion.div>

            {/* Commercial Register Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="commercialRegister">
                {t("fields.commercialRegister")}*
              </Label>
              <div className="relative my-2">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="commercialRegister"
                  type="text"
                  name="commercialRegister"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.commercialRegister}
                  className="pl-10"
                />
              </div>
              {formik.touched.commercialRegister &&
                formik.errors.commercialRegister && (
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors.commercialRegister}
                  </p>
                )}
            </motion.div>

            {/* Tax ID Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="taxId">{t("fields.taxId")}*</Label>
              <div className="relative my-2">
                <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="taxId"
                  type="text"
                  name="taxId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.taxId}
                  className="pl-10"
                />
              </div>
              {formik.touched.taxId && formik.errors.taxId && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.taxId}
                </p>
              )}
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <Label htmlFor="message">{t("fields.message")}*</Label>
              <div className="relative my-2">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  rows={4}
                />
              </div>
              {formik.touched.message && formik.errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <Button type="submit" className="w-full btn-primary" size="lg">
                {createEnrollmentFormLoading ? (
                  <>
                    <Loader className="mr-2 size-5 animate-spin" />
                    {t("loading")}
                  </>
                ) : (
                  t("submit")
                )}
              </Button>
            </motion.div>
          </motion.form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
