# GBS FWK CORE Version

This package contains the GBS Core with global state manangement.

### Installation

`npm i @grampro/fwk-core-global`

### Usage

`Important : As of now this package only works React Functional Components.`

Wrap the Store Provider around your App component.

```js
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./index.css";
import { StoreProvider } from "@grampro/fwk-core-global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);

```

#### Working with Global State

In order to work with the global state you need to set up your global state first.

You can do this by calling the special function `storeService` from `@grampro/fwk-core-global` and the function provided by `storeService` called `setData()`.

for eg: `storeService.setData("unique_name", your_value);`

#### Functional Component Example

```bash
import { storeService } from "@grampro/fwk-core-global";

function App(){
    useEffect(() => {
        data = somefetchedData; // This will be your initial data.
        storeService.setData("globalData", data); // sets the data to global state aka store.
    }, []);

    return(
        <div>Example App</div>
    )
}

export default App;

```

Now you can simply use your global state in various component's by using

`storeservice.getData("your_unique_name");`

```bash
import { storeService } from "@grampro/fwk-core-global";
import { Dropdown } from "gbs-fwk-buildingblock";
import { Textbox } from "gbs-fwk-buildingblock";

export default function App(){
    const globalStateData = storeService.getData("globalData"); // This contains your global state.
}

// do something with your data.

```

The Above method will ensure that your state data globally available across the application and thus your other components can also use them.

#### Why We need this?

This will overcome the issue of prop drilling and a better state manangement and fixes various issues with [gbs-fwk-buildingblock](https://www.npmjs.com/package/gbs-fwk-buildingblock)

Built with 🎈 fun @ [GBS](https://gramproindia.com/)
