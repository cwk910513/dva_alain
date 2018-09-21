import React from 'react';
import { connect } from 'dva';

const Products = () => {
  return (
    <div>
      <h2>List of Products</h2>
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);