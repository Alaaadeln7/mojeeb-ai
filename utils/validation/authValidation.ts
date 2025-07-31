import * as yup from "yup";

export const loginValidation = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const verifyOtpValidation = yup.object({
  otp: yup.string().required("otp is required").max(6),
});

export const forgetPasswordValidation = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const resetPasswordValidation = yup.object({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  // confirmPassword: yup
  //   .string()
  //   .min(8, "Password must be at least 8 characters")
  //   .required("Confirm Password is required")
  //   .oneOf([yup.ref("password")], "Passwords must match"),
});

export const createUserSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  role: yup.string().required("Role is required"),
});

export const verifyOtpPasswordValidation = yup.object({
  otp: yup
    .string()
    .required("otpRequired")
    .length(6, "otpLength")
    .matches(/^[0-9]+$/, "otpNumeric"),
});

export const PasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required("Current password is required")
    .min(8, "Password must be at least 8 characters"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[^A-Za-z0-9]/, "Must contain at least one special character"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});
