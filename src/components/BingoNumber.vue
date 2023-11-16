<template>
    <div id="app">
      <div class="numbers-wrap">
        <div class="numbers" :data-number="isStopped ? stoppedNumbers[stoppedNumbers.length - 1] : randomNumber">
          {{ isStopped ? stoppedNumbers[stoppedNumbers.length - 1] : randomNumber }}
        </div>
      </div>
      <button @click="startAnimation" :disabled="isRolling">Start</button>
      <button @click="stopAnimation" :disabled="!isRolling">Stop</button>
      <button @click="resetNumbers">Reset</button>
  
      <div class="numbers-grid">
        <div v-for="(num, index) in allNumbers" :key="index" class="grid-item" :class="{ 'stopped': stoppedNumbers.includes(num) }">{{ num }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        randomNumber: 0,
        isRolling: false,
        isStopped: false,
        timer: null,
        stoppedNumbers: []
      };
    },
    computed: {
      allNumbers() {
        const numbers = [];
        for (let i = 1; i <= 75; i++) {
          numbers.push(i);
        }
        return numbers;
      }
    },
    methods: {
      startAnimation() {
        this.isRolling = true;
        this.isStopped = false;
        this.timer = setInterval(() => {
          this.randomNumber = this.generateRandomNumber();
        }, 50);
      },
      stopAnimation() {
        clearInterval(this.timer);
        this.isRolling = false;
        this.isStopped = true;
        this.stoppedNumbers.push(this.randomNumber);
      },
      resetNumbers() {
        this.stoppedNumbers = [];
        this.isStopped = false;
      },
      generateRandomNumber() {
        let num = Math.floor(Math.random() * 75) + 1;
        while (this.stoppedNumbers.includes(num)) {
          num = Math.floor(Math.random() * 75) + 1;
        }
        return num;
      }
    },
  };
  </script>
  
  <style>
    /* 追加したCSS */
    .numbers-wrap {
      background-color: #f7f7f7;
      margin: 50px auto;
      padding: 10px 0;
      text-align: center;
      overflow: hidden;
      width: 100%;
    }
    .numbers {
      font-size: 100px;
      height: 200px; /* 例として適切な高さを指定 */
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .previous-numbers {
      margin: 20px;
    }
    /* 数字上昇アニメーション */
    @keyframes number-roll {
      from {
        content: '0';
      }
      to {
        content: attr(data-number);
      }
    }
    /* 追加したCSS */
    .numbers-grid {
      display: grid;
      grid-template-columns: repeat(15, 1fr);
      grid-gap: 5px;
      margin: 20px;
    }
    .grid-item {
      padding: 10px;
      border: 1px solid #ccc;
      text-align: center;
    }
    .stopped {
      background-color: blue;
      color: white;
    }
  </style>
  