export default {
  namespace: 'products',
  
  state: [],

  reducers: {
    'delete'(state, { payload: id }) {
      console.log(state);
      console.log(id);
      return state.filter(item => item.id !== id);
    },
    'test'(state) {
      console.log(state);
      console.log('666666666');
      return state;
    }
  },
};