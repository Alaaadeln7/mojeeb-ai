import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslations } from "next-intl";

const validationSchema = yup.object().shape({
  question: yup.string().required("Question is required"),
  answer: yup.string().required("Answer is required"),
  voice: yup.string().optional(),
});

type Props = {
  chatbotId: string;
  open: boolean;
  onClose: () => void;
  handleUpdateInquiry: (data: {
    chatbotId: string;
    inquiryId?: string;
    question: string;
    answer: string;
    keyword?: string;
  }) => void;
  initialData?: {
    _id: string;
    question: string;
    answer: string;
    keyword?: string;
  };
};

export default function UpdateScriptDialog({
  chatbotId,
  open,
  onClose,
  handleUpdateInquiry,
  initialData,
}: Props) {
  const t = useTranslations("UpdateScriptDialog");

  const formik = useFormik({
    initialValues: {
      question: initialData?.question || "",
      answer: initialData?.answer || "",
      keyword: initialData?.keyword || "",
    },
    validationSchema,
    onSubmit: async (values) => {
      handleUpdateInquiry({
        chatbotId,
        inquiryId: initialData?._id,
        question: values.question,
        answer: values.answer,
        keyword: values.keyword,
      });
      onClose();
    },
    enableReinitialize: true,
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <DialogHeader>
            <DialogTitle>{t("update_script")}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="question" className="text-right">
                {t("question")}
              </Label>
              <div className="col-span-3">
                <Textarea
                  id="question"
                  name="question"
                  value={formik.values.question}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.question && formik.errors.question
                      ? "border-red-500"
                      : ""
                  }
                />
                {formik.touched.question && formik.errors.question && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.question}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="answer" className="text-right">
                {t("answer")}
              </Label>
              <div className="col-span-3">
                <Textarea
                  id="answer"
                  name="answer"
                  value={formik.values.answer}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.answer && formik.errors.answer
                      ? "border-red-500"
                      : ""
                  }
                />
                {formik.touched.answer && formik.errors.answer && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.answer}
                  </p>
                )}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="destructive"
              className="rounded-4xl"
              onClick={onClose}
            >
              {t("cancel")}
            </Button>
            <Button type="submit" className="colored-btn">
              {t("confirm")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
