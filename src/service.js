import axios from './axiosConfig.ts';
axios.defaults.baseURL = 'http://localhost:5200';

// const apiUrl = "http://localhost:5200"

export default {

  getTasks: async () => {
    const result = await axios.get(`/`)
    if (result.error) {
      console.log(result.message);
      
  } else {
    return result.data
  }
  },

  addTask: async (name) => {
    const task = {
      Name: name,
      IsComplete: false
    }
    console.log('addTask', name)
    const result = await axios.post(`/`, task)
    if (result.error) {
      console.log(result.message);
      
  } else {
    return result.data
  }
  },

  setCompleted: async (id, isComplete) => {
    const task = {
      IsComplete: isComplete
    }
    console.log('setCompleted', { id, isComplete })
    const result = await axios.put(`/${id}`, task)
    if (result.error) {
      console.log(result.message);
      
  } else {
    return result.data
  }
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`/${id}`)
    if (result.error) {
      console.log(result.message);
      
  } else {
    return result.data
  }
  }
};
