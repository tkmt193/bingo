<template>
    <div>
        <div class="grid">
          <div
            v-for="(number, index) in numbers"
            :key="index"
            class="grid-item"
            :class="{ 'grid-item-center': index === 12 }"
            @click="toggleColor(index)"
            :style="{ backgroundColor: selectedItems[index] ? 'blue' : '' }"
          >
            <p class="grid-text">{{ index === 12 ? 'Free' : number }}</p>
          </div>
        </div>
        <div class="button">
          <div class="bingo">
            <button class="bingo-button" @click="displayReachMessage"
            :style="{ backgroundColor: showReachMessage ? 'blue' : '' }">リーチ</button>
            <p v-if="showReachMessage" class="reach-message">リーチ!</p>
          </div>
          <div class="bingo">
            <button class="bingo-button" @click="displayBingoMessage"
            :style="{ backgroundColor: showBingoMessage ? 'blue' : '' }">BINGO</button>
            <p v-if="showBingoMessage" class="bingo-message">BINGO!</p>
          </div>
        </div>
      </div>
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        numbers: [],
        selectedItems: new Array(25).fill(false),
        showBingoMessage: false,
        showReachMessage: false,
      };
    },
    mounted() {
      this.generateNumbers();
    },
    methods: {
  
      generateNumbers() {
        const usedNumbers = new Set();
        for (let i = 0; i < 25; i++) {
          let randomNumber;
          do {
            randomNumber = this.generateUniqueNumber(i);
          } while (usedNumbers.has(randomNumber));
  
          this.numbers.push(randomNumber);
          usedNumbers.add(randomNumber);
        }
      },
      generateUniqueNumber(index) {
        if (index === 12) return null; // 中央のマスには数字を挿入しない
        if (index % 5 === 0) {
          return Math.floor(Math.random() * 15) + 1;
        }
        if (index % 5 === 1) {
          return Math.floor(Math.random() * (30 - 16 + 1)) + 16;
        }
        if (index % 5 === 2) {
          return Math.floor(Math.random() * (50 - 31 + 1)) + 31;
        }
        if (index % 5 === 3) {
          return Math.floor(Math.random() * (65 - 51 + 1)) + 51;
        }
        if (index % 5 === 4) {
          return Math.floor(Math.random() * (75 - 66 + 1)) + 66;
        }
      },
      toggleColor(index) {
        this.selectedItems[index] = !this.selectedItems[index];
      },
      displayBingoMessage() {
        this.showBingoMessage = !this.showBingoMessage;
      },
      displayReachMessage() {
        this.showReachMessage = !this.showReachMessage;
      },
    },
  };
  </script>
  
  <style>
  /* グリッドのスタイル */
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
  
  /* グリッドアイテムのスタイル */
  .grid-item {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    cursor: pointer;
  }
  
  .grid-item-center {
    background-color: lightgray; /* 中央のマスをグレーにする */
  }
  
  /* 数字のスタイル */
  .grid-text {
    font-size: 24px;
    font-weight: bold;
  }
  
  /* 選択されたマスのスタイル */
  .grid-item.active {
    background-color: blue;
    color: white;
  }
  
  /* ビンゴボタンのスタイル */
  .bingo-button {
    display: block;
    width: 100px;
    height: 100px;
    margin: 20px ;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: lightblue;
    border: none;
    border-radius: 5px;
    width: 100px;
  }
  
  .button {
    display: flex;
    justify-content: center; /* 横方向の中央揃え */
    align-items: center; /* 縦方向の中央揃え */
    height: 300px; /* 高さを設定して中央に揃える */
  }
  
  .bingo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .bingo p {
    font-size: 24px;
    font-weight: bold;
    color: red;
  }
  
  
  
  </style>
  