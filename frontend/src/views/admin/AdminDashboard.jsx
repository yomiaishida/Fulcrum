import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { FaGift, FaUser } from "react-icons/fa";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../slices/usersApiSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetProductsQuery } from "@/slices/productsApiSlice";
import { useParams } from "react-router-dom";
// import DashboardChart from "@/components/DashboardChart";

const AdminDashboard = () => {
  const { pageNumber } = useParams;

  const { data: users, isLoading, error } = useGetUsersQuery();
  const { data, isLoading: productLoading } = useGetProductsQuery({
    pageNumber,
  });

  return (
    <>
      {isLoading || productLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="flex w-full gap-x-2">
          {console.log(users)}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex justify-between">
                {" "}
                <span>Users</span>{" "}
                <span>
                  <FaUser />
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-semibold text-green-500">
              {users.length}
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>Products</span>{" "}
                <span>
                  <FaGift />
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-semibold text-orange-500">
              {data.products.length}
            </CardContent>
          </Card>
          <div>
            {/* <DashboardChart users={users} products={data.products.length} /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
