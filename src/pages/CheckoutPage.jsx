import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageHero, StripeCheckout } from "../components";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        <h2>Checkout</h2>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;

export default CheckoutPage;
