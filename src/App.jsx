import { Toaster } from "sonner";
import { Header, ProductPage, SideBar } from "./components";
import { ProductContext } from "./contexts/ProductContext";
import {productInfo} from "./data.json";
import { useCartContext } from "./contexts/CartContext";
import { sendItemsToStorage } from "./contexts/useLocalStorage";

const App = () => {
  const {cartState} = useCartContext();
  sendItemsToStorage(cartState);

  return (
    <>
    <Toaster position="top-center" expand={false} richColors closeButton visibleToasts={1} />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="md:px-12 xl:px-28 flex flex-col max-md:gap-0 md:gap-16 lg:gap-20">
            <ProductContext.Provider value={productInfo}>
              <Header />
              <ProductPage />
            </ProductContext.Provider>
          </div>
        </div> 
        <SideBar />
      </div>
    </>
  )
}

export default App

