<template>
  <div>
    <table class = 'timer'>
      <tr>
        <td class = 'text'>До смены цвета осталось:</td>
        <td class = 'value'>{{count}}</td>
        <td>сек.</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
  props: ['count'],
  
}
</script>

<style scoped>
  .text {
    min-width: 250px;
  }
  .value {
    min-width: 30px;
    color: #DD120E;
    text-align: center;
    margin-left: auto;
  }
  .timer {
    margin-top: 40px;
    position: relative;
  }
</style>