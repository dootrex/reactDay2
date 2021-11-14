import Header from "./Header";
import Quote from "./Quote";
import Footer from "./Footer";

function App() {
  const appInfo = {
    title: "Quote of The Day",
    author: "Amaninder Gill",
  };

  return (
    <div className="App">
      <Header title={appInfo.title} />
      <Quote />
      <Footer author={appInfo.author} />
    </div>
  );
}

export default App;
