import client from 'apollo';
import { app } from 'apollo/requests';

import {
  setShops,
  setUnits,
  setBrands,
  setShopTypes,
  setShopStatus,
  setOrderStatus,
  setShippingType,
  setCategoryCoupons,
  setProductCategories,
  setUserTypes,
  setImportErrorTypes,
  setPaymentType,
  setCoupon,
  setPaymentStatus,
  setDiscountType,
} from './app';

// **************** App
export {
  setShops,
  setUnits,
  setBrands,
  setShopTypes,
  setShopStatus,
  setOrderStatus,
  setShippingType,
  setCategoryCoupons,
  setProductCategories,
  setUserTypes,
  setImportErrorTypes,
} from './app';
// **************** Language
export { setLanguage } from './language';
// **************** Settings
export { openMenuPopup, openProfilePopup } from './settings';
// **************** User
export { setUser, updateUser, signOut, userSignOut } from './user';

export const setInitStates = (accessToken) => async (dispatch) => {
  try {
    const { data: adminConfig } = await client.query({
      query: app.adminConfig,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const { data: shopadminConfig } = await client.query({
      query: app.shopadminConfig,
      context: {
        serviceName: 'shopadmin',
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const { data: authConfig } = await client.query({
      query: app.authConfig,
      context: {
        serviceName: 'auth',
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });

    if (adminConfig && authConfig) {
      const {
        shop: { data: shops },
        unit: { data: units },
        brand: { data: brands },
        shopType,
        shopStatus,
        productCategory,
      } = adminConfig;
      const {
        orderStatus,
        shippingType,
        paymentType,
        coupon,
        paymentStatus,
        discountType,
        categoryCoupon: { data: categoryCoupons },
      } = authConfig;
      const {
        userType,
        importError: { action_types },
      } = shopadminConfig;

      dispatch(setShops(shops));
      dispatch(setCoupon(coupon));
      dispatch(setPaymentType(paymentType));
      dispatch(setDiscountType(discountType));
      dispatch(setPaymentStatus(paymentStatus));
      dispatch(setUnits(units));
      dispatch(setBrands(brands));
      dispatch(setShopTypes(shopType));
      dispatch(setShopStatus(shopStatus));
      dispatch(setOrderStatus(orderStatus));
      dispatch(setShippingType(shippingType));
      dispatch(setCategoryCoupons(categoryCoupons));
      dispatch(setProductCategories(productCategory));
      dispatch(setUserTypes(userType));
      dispatch(setImportErrorTypes(action_types));
    }
  } catch (error) {}
};
