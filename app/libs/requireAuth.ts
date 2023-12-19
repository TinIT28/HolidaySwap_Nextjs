import GetCurrentUser from "../actions/getCurrentUser";
import React from "react";
import { redirect } from "next/navigation";

async function requireAuth(Component: any, allowedRoles: any[]) {
  const currentUser = await GetCurrentUser();

  if (!currentUser) {
    redirect("/");
  } else if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(currentUser.role.roleId)
  ) {
    redirect("/unauthorized"); // Redirect to an unauthorized page
  }

  return Component;
}

export default requireAuth;
