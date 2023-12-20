// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const { user, loading } = useAuth();
//     const [axiosSecure] = useAxiosSecure();

//     //use axios secure with react query
//     // const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//     //     queryKey: ['isAdmin', user?.email],
//     //     enabled: !loading,
//     //     queryFn: async () =>{
//     //         const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//     //         return res.data.admin;
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         enabled: !loading && !!user?.email, // Ensure the query runs only if the email is available
//         queryFn: async () => {
//             const response = await axiosSecure.get(`/users/admin/${user?.email}`);
//             return response.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }

// export default useAdmin

// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const { user, loading } = useAuth();
//     const [axiosSecure] = useAxiosSecure();

//     // Use axios secure with react query
//     // Pass the email as a query parameter
//     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         enabled: !loading && !!user?.email, // Ensure the query runs only when the email is available
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             return res.data.admin;
//         }
//     });

//     return [isAdmin, isAdminLoading];
// };

// export default useAdmin;


// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const { user, loading } = useAuth();
//     const [axiosSecure] = useAxiosSecure();

//     const queryInfo = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             return res.data.admin;
//         },
//         enabled: !loading && !!user?.email, // This line ensures the query only runs when the email is available and not loading
//     });

//     // Destructuring to maintain the previous return structure
//     const { data: isAdmin, isLoading: isAdminLoading } = queryInfo;

//     return [isAdmin, isAdminLoading];
// };

// export default useAdmin;


import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                throw new Error('User email is not available');
            }
            const response = await axiosSecure.get(`/users/admin/${user.email}`);
            return response.data.admin;
        },
        enabled: !loading && Boolean(user?.email)  // Ensure the query runs only when the email is available
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
