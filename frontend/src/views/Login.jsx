import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Card, Form, Input, Button } from "antd";
import useLogin from "../customHooks/useLogin";
import { useSelector } from "react-redux";

const Login = () => {
  const { onLogin, loading } = useLogin();

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="min-h-[100svh] flex items-center justify-center bg-[#f5f5f5]">
      <Card className="max-w-[30rem] w-[90%]">
        <h1 className="font-bold text-center text-2xl">Login</h1>
        <Form
          layout="vertical"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onLogin}
        >
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: "Email is required" },
              {
                type: "email",
                message: "Invalid email address",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" loading={loading} htmlType="submit" block>
            Login
          </Button>
          <div className="my-10 text-center">
            Dont have an account?{" "}
            <Link to="/register" className="text-[#1677ff]">
              Register
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
