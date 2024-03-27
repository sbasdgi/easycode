const init = {
  shops: [],
  shopType: [],
  shopStatus: [],
  orderStatus: [],

  userTypes: [],
  importErrorTypes: [],

  units: [],
  brands: [],
  shippingType: [],
  categoryCoupons: [],
  productCategories: [],
};

const app = (state = init, action) => {
  const { type } = action;
  switch (type) {
    case 'SET_SHOPS':
      let { shops } = action;
      return { ...state, shops };
    case 'SET_UNITS':
      let { units } = action;
      return { ...state, units };
    case 'SET_BRANDS':
      let { brands } = action;
      return { ...state, brands };
    case 'SET_SHOP_TYPES':
      let { shopType } = action;
      return { ...state, shopType };
    case 'SET_SHOP_STATUS':
      let { shopStatus } = action;
      return { ...state, shopStatus };
    case 'SET_ORDER_STATUS':
      let { orderStatus } = action;
      return { ...state, orderStatus };
    case 'SET_SHIPPING_TYPES':
      let { shippingType } = action;
      return { ...state, shippingType };
    case 'SET_CATEGORY_COUPONS':
      let { categoryCoupons } = action;
      return { ...state, categoryCoupons };
    case 'SET_PRODUCT_CATEGORIES':
      let { productCategories } = action;
      return { ...state, productCategories };
    case 'SET_USER_TYPES':
      let { userTypes } = action;
      return { ...state, userTypes };
    case 'SET_PAYMENT_TYPE':
      let { paymentType } = action;
      return { ...state, paymentType };
    case 'SET_COUPON':
      let { coupon } = action;
      return { ...state, coupon };
    case 'SET_DISCOUNT_TYPE':
      let { discountType } = action;
      return { ...state, discountType };
    case 'SET_PAYMENT_STATUS':
      let { paymentStatus } = action;
      return { ...state, paymentStatus };
    case 'SET_IMPORT_ERROR_TYPES':
      let { importErrorTypes } = action;
      return { ...state, importErrorTypes };

    default:
      return state;
  }
};

export default app;
