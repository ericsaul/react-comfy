import styled from "styled-components";

const CartColumns = () => {
  return (
    <div>
      <h2>Cart Columns</h2>
    </div>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-content: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default CartColumns;
