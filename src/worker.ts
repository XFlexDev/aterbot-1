export default {
  async scheduled(event: ScheduledEvent, env: any, ctx: ExecutionContext) {
    console.log("cron woke up")
  },

  async fetch() {
    return new Response("ok")
  }
}