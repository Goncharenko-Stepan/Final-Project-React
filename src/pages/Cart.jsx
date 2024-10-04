import { Layout } from "../../layouts/Layout/Layout";
import { useSelector } from "react-redux";
import {
  CartProductCard,
  Loader,
  OrderDetails,
  SectionSeparator,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { calculateSum } from "../../store/selectors";
import { Box } from "@mui/material";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartProducts, error, status } = useSelector(
    (state) => state.cartReducer
  );

  const price = useSelector(calculateSum);

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <Layout>
      <Box className={styles.Cart}>
        <SectionSeparator
          sectionName="Shopping cart"
          path="/products"
          fullSectionName="Back to store"
        />
        {status === LOADING ? (
          <Loader />
        ) : (
          <Box>
            {cartProducts?.length ? (
              <Box className={styles.CartContainer}>
                <Box className={styles.CartProducts}>
                  {cartProducts?.length ? (
                    cartProducts?.map((product) => (
                      <CartProductCard
                        key={product.id}
                        productInd={product.id}
                        productCard={product}
                      />
                    ))
                  ) : (
                    <h2>No products in cart</h2>
                  )}
                </Box>
                <OrderDetails
                  products={cartProducts}
                  productsLength={cartProducts?.length}
                  price={price}
                />
              </Box>
            ) : (
              <Box>
                <h2>Looks like you have no items in your basket currently.</h2>
                <button
                  className={styles.ContinueShoppingBtn}
                  onClick={handleClick}
                >
                  Continue Shopping
                </button>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Layout>
  );
};
