import { findAllProjects } from "@/lib/auth"
import { useQuery } from "@tanstack/react-query"

export const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: () => findAllProjects()
    })
}