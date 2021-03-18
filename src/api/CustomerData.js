import api from ".";

export default {
  all() {
    return api.get("data");
  }
};
