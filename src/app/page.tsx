import { redirect } from "next/navigation";
import { toLangSlug, toLevelSlug, DEFAULT_LEVEL } from "@/lib/routes/langLevel";

export default function Page() {
  redirect(`/${toLangSlug("EN")}/${toLevelSlug(DEFAULT_LEVEL)}`);
}
