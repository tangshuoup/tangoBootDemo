import { defineStore } from "@mijadesign/tango-boot";

defineStore(
  {
    number: 10,

    add() {
      this.number++;
    },

    decrement() {
      this.number--;
    },
  },
  "counter"
);
