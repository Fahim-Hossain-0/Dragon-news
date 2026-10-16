
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Link from "next/link";
import { redirect } from "next/navigation";

const default_category_id = "chal"

export default async function Home() {
  
  redirect(`/category/${default_category_id}`)

}
