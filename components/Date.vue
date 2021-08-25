<template>
   <span>{{ printedDate }}</span>
</template>

<script>
export default {
   computed: {
      printedDate: function () {
         const date = new Date(this.dateStr);
         const monthPad = date.getMonth() < 9 ? '0' : '';
         const dayPad = date.getDate() < 10 ? '0' : '';
         return `${date.getFullYear()}.${monthPad}${
            date.getMonth() + 1
         }.${dayPad}${date.getDate()}`;
      }
   },
   props: {
      dateStr: {
         type: String,
         require: true,
         validator: function (value) {
            return value.length > 0;
         }
      }
   }
};
</script>
