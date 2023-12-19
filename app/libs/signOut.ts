import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignOutMiddle() {
  signOut();
  return redirect("/");
}
