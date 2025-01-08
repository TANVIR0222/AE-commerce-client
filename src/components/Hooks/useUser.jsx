import { useSelector } from "react-redux";
import { useFetchSingleUserQuery } from "../../app/feature/userApi/userApi";

export const useUser = () => {
    const id = useSelector((state) => state?.user?.id)

    const {data : user , isLoading, error} = useFetchSingleUserQuery(id)

    return [user , isLoading]
};

