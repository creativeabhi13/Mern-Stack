import CommonForm from "@/components/common/form";
// import { useToast } from "../../components/ui/toast";
import { loginFormControls} from "@/config";
// import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    // dispatch(registerUser(formData)).then((data) => {
    //   if (data?.payload?.success) {
    //     toast({
    //       title: data?.payload?.message,
    //     });
    //     navigate("/auth/login");
    //   } else {
    //     toast({
    //       title: data?.payload?.message,
    //       variant: "destructive",
    //     });
    //   }
    // });
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Login to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;