import axios from "axios"

export default function useAxios() {
  const get = async (link) => {
    const state = {
      data: null,
      error: null
    }

    try {
      const response = await axios.get(link)
      state.data = response.data
    } catch (error) {
      state.error = error.message
    }

    return state
  }

  return { get }
}
