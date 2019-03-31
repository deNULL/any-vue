<template>
  <a-list :value="[{ header: 'This is child view', group: [
      { title: 'Pop back', kind: 'primary', onclick: () => $anyvue.pop() },
    ] } ]"/>
</template>
