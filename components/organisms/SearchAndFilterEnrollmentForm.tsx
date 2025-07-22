"use client";
import {
  CheckCircle2,
  Clock,
  Filter,
  List,
  Search,
  XCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem } from "../ui/select";
export default function SearchAndFilterEnrollmentForm({
  t,
  searchQuery,
  setSearchQuery,
  searchLoading,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const filterVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("searchPlaceholder")}
            className="pr-10 h-12 border-0 shadow-md bg-card"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={searchLoading}
          />
        </div>
        <Button
          variant="outline"
          className={`h-12 px-6 border-0 shadow-md bg-card hover:bg-muted/50 ${
            showFilters && "btn-primary"
          }`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="ml-2 h-4 w-4" />
          {showFilters ? t("hideFilter") : t("showFilter")}
        </Button>
      </div>
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          variants={filterVariants}
        >
          <div>
            <Label>{t("statusWord")}</Label>
            <Select>
              <SelectContent>
                <SelectItem value="all">
                  <div className="flex items-center gap-2">
                    <List className="h-4 w-4" />
                    {t("all")}
                  </div>
                </SelectItem>
                <SelectItem value="active">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {t("status.accepted")}
                  </div>
                </SelectItem>
                <SelectItem value="inactive">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    {t("status.rejected")}
                  </div>
                </SelectItem>
                <SelectItem value="pending">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-500" />
                    {t("status.pending")}
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>
      )}
    </>
  );
}
