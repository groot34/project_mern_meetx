import { authMiddleware } from "@clerk/nextjs";
//import {createRouteMatch} from '@clerk/nextjs/server'

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};