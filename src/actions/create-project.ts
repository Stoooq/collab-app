"use server"

import { getUserById } from "@/data/user"
import { useCurrentUser } from "@/hooks/useCurrentUser"
import { currentUser } from "@/lib/auth"
import db from "@/lib/db"
import { ProjectSchema } from "@/schemas"
import { RoleType } from "@prisma/client"
import z from "zod"

export const createProject = async (values: z.infer<typeof ProjectSchema>) => {
    const validation = ProjectSchema.safeParse(values)
    if (!validation.success) return { error: "Invalid fields" }

    const { title, description } = validation.data

    const data = await currentUser()

    const user = await getUserById(data?.id!) //!

    await db.project.create({
        data: {
            title: title,
            description: description,
            members: {
                create: [
                    {
                        userId: user!.id, //!
                        role: RoleType.ADMIN
                    }
                ]
            }
        }
    })

    return { success: "Project created" }
}