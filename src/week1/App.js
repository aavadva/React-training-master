import { Jumbotron } from "./components/Jumbotron";
import  data  from "./mockRepos.json";
import {Repos} from "./Repos";

export const App = () => {
  return (
      <div className="container">
        <Jumbotron
            title="GitHub Directory"
            subTitle="A list of all your GitHub repositories"
        />
          {data.length > 0 ? <Repos data = {data}/>:<Jumbotron title={"No Repos"}/>}
      </div>
  );
};
