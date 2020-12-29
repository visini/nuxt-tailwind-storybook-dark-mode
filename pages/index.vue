<template>
  <div class="container">
    <div class="p-4">
      Switching color mode will switch component styles accordingly...
    </div>
    <div>
      <div class="grid grid-cols-4 gap-1">
        <div class="p-4"><ColorModePicker></ColorModePicker></div>
        <div class="p-3"><Button>Foo</Button></div>
        <div class="p-3"><Button variant="secondary">Foo</Button></div>
        <div class="p-3"><Button square>Foo</Button></div>
      </div>
    </div>
  </div>
</template>
