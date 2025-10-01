<template>
  <Label>Tema:</Label>
  <div class="mb-4 mt-1">
    <Button @click="setMode('light')" class="dark:!bg-white mr-3" size="sm">
      Light
    </Button>
    <Button @click="setMode('dark')" class="dark:!bg-white" size="sm">
      Dark
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Label from "@/components/ui/label/Label.vue";

const emit = defineEmits<{
  (e: "update:mode", value: string): void;
}>();

function setMode(value: string) {
  emit("update:mode", value);
}
</script>
