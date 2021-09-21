import Repositories from "./components/Repositories";
import RepositoriesForm from "./components/RepositoriesForm";

function App() {
  return (
    <div className="container p-4">
      <div className="row">

        <RepositoriesForm />
        <Repositories />
      </div>
    </div>
  );
}

export default App;
