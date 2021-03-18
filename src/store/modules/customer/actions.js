import CustomerData from "../../../api/CustomerData";

export const getCustomerData = ({ commit }) => {
  CustomerData.all().then(response =>
    commit("SET_CUSTOMER_DATA", response.data)
  );
};
