import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', () => {
  state: () => {
    return {
      posts: [],
      post: null
    }
  }

  actions: {
    
  }
})
