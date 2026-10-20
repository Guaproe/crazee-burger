import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (data.firstName.length > 1) {
          alert(`Bonjour ${data.firstName}`);
          navigate("/order");
        }
      })}
    >
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        required
        {...register("firstName", { required: true, minLength: 2 })}
        placeholder="Entrez votre prénom..."
      />
      <button>Accédez à votre espace</button>
    </form>
  );
};

export default LoginForm;
