import { Alert } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
