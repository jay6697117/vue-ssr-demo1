// app.js (在服务器和客户端之间共享)
import { createSSRApp } from 'vue';

export function createApp() {
  return createSSRApp({
    template: `<h1>{{count}}</h1><button style ="padding: 4px 20px;" @click="add">{{ count }}</button>`,
    data: () => ({ count: 1 }),
    methods: {
      add() {
        this.count += 1;
      }
    }
  });
}
