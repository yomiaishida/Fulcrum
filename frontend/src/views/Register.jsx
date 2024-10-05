import { useEffect } from "react";
import { Card, Form, Input, Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useRegister from "../customHooks/useRegister";
import { useSelector } from "react-redux";

const Register = () => {
  const { onRegister, loading } = useRegister();

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
    <div className="min-h-[100svh] flex items-center justify-center">
      <Card className="max-w-[30rem] w-[90%]">
        <h1 className="font-bold text-center text-2xl">Register</h1>
        <Form
          layout="vertical"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onRegister}
        >
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: "Full name is required" }]}
          >
            <Input />
          </Form.Item>
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
            name="username"
            label="Username"
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: "Phone number is required" },
              {
                pattern:
                  /^\+?[1-9]\d{1,14}$|^(\+?[0-9]{1,3})?[-.\s]?\(?[0-9]{1,4}?\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/,
                message: "Invalid phone number",
              },
            ]}
          >
            <Input addonBefore="+234" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" loading={loading} htmlType="submit" block>
            Register
          </Button>
          <div className="my-2 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1677ff]">
              Login
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
