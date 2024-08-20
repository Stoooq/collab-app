"use server";

import { auth } from "@/auth";
import db from "@/lib/db";
import { RoleType } from "@prisma/client";

export const currentUser = async () => {
	const session = await auth();

	return session?.user;
};

export const findAllProjects = async () => {
  const user = await currentUser()
	return await db.project.findMany({
        where: {
          members: {
            some: {
              userId: user?.id,
              role: {
                in: [RoleType.USER, RoleType.ADMIN],
              },
            },
          },
        },
        include: {
          members: true,
        },
      });
};
