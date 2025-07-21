import { parsePhoneNumberFromString } from "libphonenumber-js";

export function formatPhoneNumberIntl(
  raw: string,
  country: string = "SA"
): string {
  const phoneNumber = parsePhoneNumberFromString(raw, country);
  if (!phoneNumber || !phoneNumber.isValid()) {
    return "Invalid number";
  }
  return phoneNumber.formatInternational();
}
