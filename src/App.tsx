import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>

      <form
        onSubmit={handleSubmit((data) => {
          if (data.firstName.length > 1) {
            alert(`Bonjour ${data.firstName}`);
          }
        })}
      >
        <input
          type="text"
          required
          {...register("firstName", { required: true, minLength: 2 })}
          placeholder="Entre votre prénom..."
        />
        <button>Accédez à votre espace</button>
      </form>
    </>
  );
};

export default App;
