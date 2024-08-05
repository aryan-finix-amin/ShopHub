import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/profile");
      }
    }, [user, router]);

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
